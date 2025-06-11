using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.TransportationSetItems
{
    public partial interface ITransportationSetItemRepository : IRepository<TransportationSetItem, Guid>
    {

        Task DeleteAllAsync(
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
            CancellationToken cancellationToken = default);
        Task<List<TransportationSetItem>> GetListAsync(
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
                    CancellationToken cancellationToken = default
                );

        Task<long> GetCountAsync(
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
            CancellationToken cancellationToken = default);
    }
}