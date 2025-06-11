using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupManagerBase : DomainService
    {
        protected ITransportationSetItemGroupRepository _transportationSetItemGroupRepository;

        public TransportationSetItemGroupManagerBase(ITransportationSetItemGroupRepository transportationSetItemGroupRepository)
        {
            _transportationSetItemGroupRepository = transportationSetItemGroupRepository;
        }

        public virtual async Task<TransportationSetItemGroup> CreateAsync(
        string? name = null, int? order = null, string? type = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            var transportationSetItemGroup = new TransportationSetItemGroup(
             GuidGenerator.Create(),
             name, order, type, rootId, transportationSetRootId
             );

            return await _transportationSetItemGroupRepository.InsertAsync(transportationSetItemGroup);
        }

        public virtual async Task<TransportationSetItemGroup> UpdateAsync(
            Guid id,
            string? name = null, int? order = null, string? type = null, Guid? rootId = null, Guid? transportationSetRootId = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var transportationSetItemGroup = await _transportationSetItemGroupRepository.GetAsync(id);

            transportationSetItemGroup.Name = name;
            transportationSetItemGroup.Order = order;
            transportationSetItemGroup.Type = type;
            transportationSetItemGroup.RootId = rootId;
            transportationSetItemGroup.TransportationSetRootId = transportationSetRootId;

            transportationSetItemGroup.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _transportationSetItemGroupRepository.UpdateAsync(transportationSetItemGroup);
        }

    }
}