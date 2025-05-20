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

namespace PortX.ShippingWorkflows
{
    public abstract class EfCoreShippingWorkflowRepositoryBase : EfCoreRepository<PortXDbContext, ShippingWorkflow, Guid>
    {
        public EfCoreShippingWorkflowRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, name, transportationType, mode, incoterms, isActive, conditionSettings, rootId, transportationSetRootId);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<ShippingWorkflow>> GetListAsync(
            string? filterText = null,
            string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, name, transportationType, mode, incoterms, isActive, conditionSettings, rootId, transportationSetRootId);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? ShippingWorkflowConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, name, transportationType, mode, incoterms, isActive, conditionSettings, rootId, transportationSetRootId);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<ShippingWorkflow> ApplyFilter(
            IQueryable<ShippingWorkflow> query,
            string? filterText = null,
            string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => e.Name!.Contains(filterText!) || e.TransportationType!.Contains(filterText!) || e.Mode!.Contains(filterText!) || e.Incoterms!.Contains(filterText!) || e.ConditionSettings!.Contains(filterText!))
                    .WhereIf(!string.IsNullOrWhiteSpace(name), e => e.Name.Contains(name))
                    .WhereIf(!string.IsNullOrWhiteSpace(transportationType), e => e.TransportationType.Contains(transportationType))
                    .WhereIf(!string.IsNullOrWhiteSpace(mode), e => e.Mode.Contains(mode))
                    .WhereIf(!string.IsNullOrWhiteSpace(incoterms), e => e.Incoterms.Contains(incoterms))
                    .WhereIf(isActive.HasValue, e => e.IsActive == isActive)
                    .WhereIf(!string.IsNullOrWhiteSpace(conditionSettings), e => e.ConditionSettings.Contains(conditionSettings))
                    .WhereIf(rootId.HasValue, e => e.rootId == rootId)
                    .WhereIf(transportationSetRootId.HasValue, e => e.TransportationSetRootId == transportationSetRootId);
        }
    }
}