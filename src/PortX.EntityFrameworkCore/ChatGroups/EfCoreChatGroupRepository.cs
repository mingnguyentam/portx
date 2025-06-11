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

namespace PortX.ChatGroups
{
    public abstract class EfCoreChatGroupRepositoryBase : EfCoreRepository<PortXDbContext, ChatGroup, Guid>
    {
        public EfCoreChatGroupRepositoryBase(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task DeleteAllAsync(
            string? filterText = null,
                        string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null,
            CancellationToken cancellationToken = default)
        {

            var query = await GetQueryableAsync();

            query = ApplyFilter(query, filterText, name, description, isActive, providerName, providerKey);

            var ids = query.Select(x => x.Id);
            await DeleteManyAsync(ids, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<ChatGroup>> GetListAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null,
            string? sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetQueryableAsync()), filterText, name, description, isActive, providerName, providerKey);
            query = query.OrderBy(string.IsNullOrWhiteSpace(sorting) ? ChatGroupConsts.GetDefaultSorting(false) : sorting);
            return await query.PageBy(skipCount, maxResultCount).ToListAsync(cancellationToken);
        }

        public virtual async Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null,
            CancellationToken cancellationToken = default)
        {
            var query = ApplyFilter((await GetDbSetAsync()), filterText, name, description, isActive, providerName, providerKey);
            return await query.LongCountAsync(GetCancellationToken(cancellationToken));
        }

        protected virtual IQueryable<ChatGroup> ApplyFilter(
            IQueryable<ChatGroup> query,
            string? filterText = null,
            string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null)
        {
            return query
                    .WhereIf(!string.IsNullOrWhiteSpace(filterText), e => e.Name!.Contains(filterText!) || e.Description!.Contains(filterText!) || e.ProviderName!.Contains(filterText!))
                    .WhereIf(!string.IsNullOrWhiteSpace(name), e => e.Name.Contains(name))
                    .WhereIf(!string.IsNullOrWhiteSpace(description), e => e.Description.Contains(description))
                    .WhereIf(isActive.HasValue, e => e.IsActive == isActive)
                    .WhereIf(!string.IsNullOrWhiteSpace(providerName), e => e.ProviderName.Contains(providerName))
                    .WhereIf(providerKey.HasValue, e => e.ProviderKey == providerKey);
        }
    }
}