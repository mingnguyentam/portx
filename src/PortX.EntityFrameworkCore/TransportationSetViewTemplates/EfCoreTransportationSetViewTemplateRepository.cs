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

namespace PortX.TransportationSetViewTemplates
{
    public abstract class EfCoreTransportationSetViewTemplateRepositoryBase : EfCoreRepository<PortXDbContext, TransportationSetViewTemplate, Guid>
    {
        public EfCoreTransportationSetViewTemplateRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        string? name = null,
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, name, description, data, rootId, transportationSetRootId);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<TransportationSetViewTemplate>> GetListAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, name, description, data, rootId, transportationSetRootId);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? TransportationSetViewTemplateConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, name, description, data, rootId, transportationSetRootId);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<TransportationSetViewTemplate> ApplyFilter(
            IQueryable<TransportationSetViewTemplate> query,
            string? filterText = null,
            string? name = null,
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => e.Name!.Contains(filterText!) || e.Description!.Contains(filterText!) || e.Data!.Contains(filterText!))
                    .WhereIf(!string.IsNullOrWhiteSpace(name), e => e.Name.Contains(name))
                    .WhereIf(!string.IsNullOrWhiteSpace(description), e => e.Description.Contains(description))
                    .WhereIf(!string.IsNullOrWhiteSpace(data), e => e.Data.Contains(data))
                    .WhereIf(rootId.HasValue, e => e.RootId == rootId)
                    .WhereIf(transportationSetRootId.HasValue, e => e.TransportationSetRootId == transportationSetRootId);
        }
    }
}