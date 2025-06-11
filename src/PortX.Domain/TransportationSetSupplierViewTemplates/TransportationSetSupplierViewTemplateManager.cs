using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class TransportationSetSupplierViewTemplateManagerBase : DomainService
    {
        protected ITransportationSetSupplierViewTemplateRepository _transportationSetSupplierViewTemplateRepository;

        public TransportationSetSupplierViewTemplateManagerBase(ITransportationSetSupplierViewTemplateRepository transportationSetSupplierViewTemplateRepository)
        {
            _transportationSetSupplierViewTemplateRepository = transportationSetSupplierViewTemplateRepository;
        }

        public virtual async Task<TransportationSetSupplierViewTemplate> CreateAsync(
        Guid? supplierTenantId = null, Guid? transportationSetViewTemplateRootId = null, Guid? supplierId = null, Guid? rootId = null, Guid? shippingRootId = null)
        {

            var transportationSetSupplierViewTemplate = new TransportationSetSupplierViewTemplate(
             GuidGenerator.Create(),
             supplierTenantId, transportationSetViewTemplateRootId, supplierId, rootId, shippingRootId
             );

            return await _transportationSetSupplierViewTemplateRepository.InsertAsync(transportationSetSupplierViewTemplate);
        }

        public virtual async Task<TransportationSetSupplierViewTemplate> UpdateAsync(
            Guid id,
            Guid? supplierTenantId = null, Guid? transportationSetViewTemplateRootId = null, Guid? supplierId = null, Guid? rootId = null, Guid? shippingRootId = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var transportationSetSupplierViewTemplate = await _transportationSetSupplierViewTemplateRepository.GetAsync(id);

            transportationSetSupplierViewTemplate.SupplierTenantId = supplierTenantId;
            transportationSetSupplierViewTemplate.TransportationSetViewTemplateRootId = transportationSetViewTemplateRootId;
            transportationSetSupplierViewTemplate.SupplierId = supplierId;
            transportationSetSupplierViewTemplate.RootId = rootId;
            transportationSetSupplierViewTemplate.ShippingRootId = shippingRootId;

            transportationSetSupplierViewTemplate.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _transportationSetSupplierViewTemplateRepository.UpdateAsync(transportationSetSupplierViewTemplate);
        }

    }
}