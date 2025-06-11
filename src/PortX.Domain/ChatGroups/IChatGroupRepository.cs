using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.ChatGroups
{
    public partial interface IChatGroupRepository : IRepository<ChatGroup, Guid>
    {

        Task DeleteAllAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null,
            CancellationToken cancellationToken = default);
        Task<List<ChatGroup>> GetListAsync(
                    string? filterText = null,
                    string? name = null,
                    string? description = null,
                    bool? isActive = null,
                    string? providerName = null,
                    Guid? providerKey = null,
                    string? sorting = null,
                    int maxResultCount = int.MaxValue,
                    int skipCount = 0,
                    CancellationToken cancellationToken = default
                );

        Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            bool? isActive = null,
            string? providerName = null,
            Guid? providerKey = null,
            CancellationToken cancellationToken = default);
    }
}