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

namespace PortX.TransportationSetItemGroups
{
    public abstract class EfCoreTransportationSetItemGroupRepositoryBase : EfCoreRepository<PortXDbContext, TransportationSetItemGroup, Guid>
    {
        public EfCoreTransportationSetItemGroupRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, name, orderMin, orderMax, type, rootId, transportationSetRootId);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<TransportationSetItemGroup>> GetListAsync(
            string? filterText = null,
            string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, name, orderMin, orderMax, type, rootId, transportationSetRootId);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? TransportationSetItemGroupConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, name, orderMin, orderMax, type, rootId, transportationSetRootId);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<TransportationSetItemGroup> ApplyFilter(
            IQueryable<TransportationSetItemGroup> query,
            string? filterText = null,
            string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => e.Name!.Contains(filterText!) || e.Type!.Contains(filterText!))
                    .WhereIf(!string.IsNullOrWhiteSpace(name), e => e.Name.Contains(name))
                    .WhereIf(orderMin.HasValue, e => e.Order >= orderMin!.Value)
                    .WhereIf(orderMax.HasValue, e => e.Order <= orderMax!.Value)
                    .WhereIf(!string.IsNullOrWhiteSpace(type), e => e.Type.Contains(type))
                    .WhereIf(rootId.HasValue, e => e.RootId == rootId)
                    .WhereIf(transportationSetRootId.HasValue, e => e.TransportationSetRootId == transportationSetRootId);
        }
    }
}