using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.TransportationSetItemGroups
{
    public partial interface ITransportationSetItemGroupRepository : IRepository<TransportationSetItemGroup, Guid>
    {

        Task DeleteAllAsync(
            string? filterText = null,
            string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
        Task<List<TransportationSetItemGroup>> GetListAsync(
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
                    CancellationToken cancellationToken = default
                );

        Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            int? orderMin = null,
            int? orderMax = null,
            string? type = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
    }
}