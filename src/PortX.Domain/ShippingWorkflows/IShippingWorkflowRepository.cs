using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace PortX.ShippingWorkflows
{
    public partial interface IShippingWorkflowRepository : IRepository<ShippingWorkflow, Guid>
    {

        Task DeleteAllAsync(
            string? filterText = null,
            string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
        Task<List<ShippingWorkflow>> GetListAsync(
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
                    CancellationToken cancellationToken = default
                );

        Task<long> GetCountAsync(
            string? filterText = null,
            string? name = null,
            string? transportationType = null,
            string? mode = null,
            string? incoterms = null,
            bool? isActive = null,
            string? conditionSettings = null,
            Guid? rootId = null,
            Guid? transportationSetRootId = null,
            CancellationToken cancellationToken = default);
    }
}