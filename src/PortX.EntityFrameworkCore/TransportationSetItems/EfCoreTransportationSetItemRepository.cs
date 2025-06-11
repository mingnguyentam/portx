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

namespace PortX.TransportationSetItems
{
    public abstract class EfCoreTransportationSetItemRepositoryBase : EfCoreRepository<PortXDbContext, TransportationSetItem, Guid>
    {
        public EfCoreTransportationSetItemRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        string? name = null,
            string? type = null,
            string? attributes = null,
            int? orderMin = null,
            int? orderMax = null,
            string? category = null,
            bool? isActive = null,
            bool? isDefault = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            Guid? transportationSetItemGroupRootId = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, name, type, attributes, orderMin, orderMax, category, isActive, isDefault, rootId, transportationSetRootId, transportationSetItemGroupRootId);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<TransportationSetItem>> GetListAsync(
            string? filterText = null,
            string? name = null,
            string? type = null,
            string? attributes = null,
            int? orderMin = null,
            int? orderMax = null,
            string? category = null,
            bool? isActive = null,
            bool? isDefault = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            Guid? transportationSetItemGroupRootId = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, name, type, attributes, orderMin, orderMax, category, isActive, isDefault, rootId, transportationSetRootId, transportationSetItemGroupRootId);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? TransportationSetItemConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? type = null,
            string? attributes = null,
            int? orderMin = null,
            int? orderMax = null,
            string? category = null,
            bool? isActive = null,
            bool? isDefault = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            Guid? transportationSetItemGroupRootId = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, name, type, attributes, orderMin, orderMax, category, isActive, isDefault, rootId, transportationSetRootId, transportationSetItemGroupRootId);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<TransportationSetItem> ApplyFilter(
            IQueryable<TransportationSetItem> query,
            string? filterText = null,
            string? name = null,
            string? type = null,
            string? attributes = null,
            int? orderMin = null,
            int? orderMax = null,
            string? category = null,
            bool? isActive = null,
            bool? isDefault = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            Guid? transportationSetItemGroupRootId = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => e.Name!.Contains(filterText!) || e.Type!.Contains(filterText!) || e.Attributes!.Contains(filterText!) || e.Category!.Contains(filterText!))
                    .WhereIf(!string.IsNullOrWhiteSpace(name), e => e.Name.Contains(name))
                    .WhereIf(!string.IsNullOrWhiteSpace(type), e => e.Type.Contains(type))
                    .WhereIf(!string.IsNullOrWhiteSpace(attributes), e => e.Attributes.Contains(attributes))
                    .WhereIf(orderMin.HasValue, e => e.Order >= orderMin!.Value)
                    .WhereIf(orderMax.HasValue, e => e.Order <= orderMax!.Value)
                    .WhereIf(!string.IsNullOrWhiteSpace(category), e => e.Category.Contains(category))
                    .WhereIf(isActive.HasValue, e => e.IsActive == isActive)
                    .WhereIf(isDefault.HasValue, e => e.IsDefault == isDefault)
                    .WhereIf(rootId.HasValue, e => e.RootId == rootId)
                    .WhereIf(transportationSetRootId.HasValue, e => e.TransportationSetRootId == transportationSetRootId)
                    .WhereIf(transportationSetItemGroupRootId.HasValue, e => e.TransportationSetItemGroupRootId == transportationSetItemGroupRootId);
        }
    }
}