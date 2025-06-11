using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public partial interface ITransportationSetSupplierViewTemplateRepository : IRepository<TransportationSetSupplierViewTemplate, Guid>
    {

        Task DeleteAllAsync(
            string? filterText = null,
            Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null,
            CancellationToken cancellationToken = default);
        Task<List<TransportationSetSupplierViewTemplate>> GetListAsync(
                    string? filterText = null,
                    Guid? supplierTenantId = null,
                    Guid? transportationSetViewTemplateRootId = null,
                    Guid? supplierId = null,
                    Guid? rootId = null,
                    Guid? shippingRootId = null,
                    string? sorting = null,
                    int maxResultCount = int.MaxValue,
                    int skipCount = 0,
                    CancellationToken cancellationToken = default
                );

        Task<long> GetCountAsync(
            string? filterText = null,
            Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null,
            CancellationToken cancellationToken = default);
    }
}