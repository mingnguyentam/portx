using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemManagerBase : DomainService
    {
        protected ITransportationSetItemRepository _transportationSetItemRepository;

        public TransportationSetItemManagerBase(ITransportationSetItemRepository transportationSetItemRepository)
        {
            _transportationSetItemRepository = transportationSetItemRepository;
        }

        public virtual async Task<TransportationSetItem> CreateAsync(
        int order, bool isActive, bool isDefault, string? name = null, string? type = null, string? attributes = null, string? category = null, Guid? rootId = null, Guid? transportationSetRootId = null, Guid? transportationSetItemGroupRootId = null)
        {

            var transportationSetItem = new TransportationSetItem(
             GuidGenerator.Create(),
             order, isActive, isDefault, name, type, attributes, category, rootId, transportationSetRootId, transportationSetItemGroupRootId
             );

            return await _transportationSetItemRepository.InsertAsync(transportationSetItem);
        }

        public virtual async Task<TransportationSetItem> UpdateAsync(
            Guid id,
            int order, bool isActive, bool isDefault, string? name = null, string? type = null, string? attributes = null, string? category = null, Guid? rootId = null, Guid? transportationSetRootId = null, Guid? transportationSetItemGroupRootId = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var transportationSetItem = await _transportationSetItemRepository.GetAsync(id);

            transportationSetItem.Order = order;
            transportationSetItem.IsActive = isActive;
            transportationSetItem.IsDefault = isDefault;
            transportationSetItem.Name = name;
            transportationSetItem.Type = type;
            transportationSetItem.Attributes = attributes;
            transportationSetItem.Category = category;
            transportationSetItem.RootId = rootId;
            transportationSetItem.TransportationSetRootId = transportationSetRootId;
            transportationSetItem.TransportationSetItemGroupRootId = transportationSetItemGroupRootId;

            transportationSetItem.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _transportationSetItemRepository.UpdateAsync(transportationSetItem);
        }

    }
}