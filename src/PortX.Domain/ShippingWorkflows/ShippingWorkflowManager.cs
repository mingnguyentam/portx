using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.ShippingWorkflows
{
    public abstract class ShippingWorkflowManagerBase : DomainService
    {
        protected IShippingWorkflowRepository _shippingWorkflowRepository;

        public ShippingWorkflowManagerBase(IShippingWorkflowRepository shippingWorkflowRepository)
        {
            _shippingWorkflowRepository = shippingWorkflowRepository;
        }

        public virtual async Task<ShippingWorkflow> CreateAsync(
        bool isActive, string? name = null, string? transportationType = null, string? mode = null, string? incoterms = null, string? conditionSettings = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            var shippingWorkflow = new ShippingWorkflow(
             GuidGenerator.Create(),
             isActive, name, transportationType, mode, incoterms, conditionSettings, rootId, transportationSetRootId
             );

            return await _shippingWorkflowRepository.InsertAsync(shippingWorkflow);
        }

        public virtual async Task<ShippingWorkflow> UpdateAsync(
            Guid id,
            bool isActive, string? name = null, string? transportationType = null, string? mode = null, string? incoterms = null, string? conditionSettings = null, Guid? rootId = null, Guid? transportationSetRootId = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var shippingWorkflow = await _shippingWorkflowRepository.GetAsync(id);

            shippingWorkflow.IsActive = isActive;
            shippingWorkflow.Name = name;
            shippingWorkflow.TransportationType = transportationType;
            shippingWorkflow.Mode = mode;
            shippingWorkflow.Incoterms = incoterms;
            shippingWorkflow.ConditionSettings = conditionSettings;
            shippingWorkflow.rootId = rootId;
            shippingWorkflow.TransportationSetRootId = transportationSetRootId;

            shippingWorkflow.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _shippingWorkflowRepository.UpdateAsync(shippingWorkflow);
        }

    }
}