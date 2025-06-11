using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.TransportationSetViewTemplates
{
    public partial interface ITransportationSetViewTemplateRepository : IRepository<TransportationSetViewTemplate, Guid>
    {

        Task DeleteAllAsync(
            string? filterText = null,
            string? name = null,
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
        Task<List<TransportationSetViewTemplate>> GetListAsync(
                    string? filterText = null,
                    string? name = null,
                    string? description = null,
                    string? data = null,
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
            string? description = null,
            string? data = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
    }
}