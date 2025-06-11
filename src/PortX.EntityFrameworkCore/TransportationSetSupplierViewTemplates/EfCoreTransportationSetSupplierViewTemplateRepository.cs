using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using PortX.EntityFrameworkCore;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class EfCoreTransportationSetSupplierViewTemplateRepositoryBase : EfCoreRepository<PortXDbContext, TransportationSetSupplierViewTemplate, Guid>
    {
        public EfCoreTransportationSetSupplierViewTemplateRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, supplierTenantId, transportationSetViewTemplateRootId, supplierId, rootId, shippingRootId);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<TransportationSetSupplierViewTemplate>> GetListAsync(
            string? filterText = null,
            Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, supplierTenantId, transportationSetViewTemplateRootId, supplierId, rootId, shippingRootId);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? TransportationSetSupplierViewTemplateConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, supplierTenantId, transportationSetViewTemplateRootId, supplierId, rootId, shippingRootId);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<TransportationSetSupplierViewTemplate> ApplyFilter(
            IQueryable<TransportationSetSupplierViewTemplate> query,
            string? filterText = null,
            Guid? supplierTenantId = null,
            Guid? transportationSetViewTemplateRootId = null,
            Guid? supplierId = null,
            Guid? rootId = null,
            Guid? shippingRootId = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => true)
                    .WhereIf(supplierTenantId.HasValue, e => e.SupplierTenantId == supplierTenantId)
                    .WhereIf(transportationSetViewTemplateRootId.HasValue, e => e.TransportationSetViewTemplateRootId == transportationSetViewTemplateRootId)
                    .WhereIf(supplierId.HasValue, e => e.SupplierId == supplierId)
                    .WhereIf(rootId.HasValue, e => e.RootId == rootId)
                    .WhereIf(shippingRootId.HasValue, e => e.ShippingRootId == shippingRootId);
        }
    }
}