using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateManagerBase : DomainService
    {
        protected ITransportationSetViewTemplateRepository _transportationSetViewTemplateRepository;

        public TransportationSetViewTemplateManagerBase(ITransportationSetViewTemplateRepository transportationSetViewTemplateRepository)
        {
            _transportationSetViewTemplateRepository = transportationSetViewTemplateRepository;
        }

        public virtual async Task<TransportationSetViewTemplate> CreateAsync(
        string? name = null, string? description = null, string? data = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            var transportationSetViewTemplate = new TransportationSetViewTemplate(
             GuidGenerator.Create(),
             name, description, data, rootId, transportationSetRootId
             );

            return await _transportationSetViewTemplateRepository.InsertAsync(transportationSetViewTemplate);
        }

        public virtual async Task<TransportationSetViewTemplate> UpdateAsync(
            Guid id,
            string? name = null, string? description = null, string? data = null, Guid? rootId = null, Guid? transportationSetRootId = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var transportationSetViewTemplate = await _transportationSetViewTemplateRepository.GetAsync(id);

            transportationSetViewTemplate.Name = name;
            transportationSetViewTemplate.Description = description;
            transportationSetViewTemplate.Data = data;
            transportationSetViewTemplate.RootId = rootId;
            transportationSetViewTemplate.TransportationSetRootId = transportationSetRootId;

            transportationSetViewTemplate.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _transportationSetViewTemplateRepository.UpdateAsync(transportationSetViewTemplate);
        }

    }
}