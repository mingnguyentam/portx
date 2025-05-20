using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.ShippingWorkflows
{
    public abstract class ShippingWorkflowBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        [CanBeNull]
        public virtual string? Name { get; set; }

        [CanBeNull]
        public virtual string? TransportationType { get; set; }

        [CanBeNull]
        public virtual string? Mode { get; set; }

        [CanBeNull]
        public virtual string? Incoterms { get; set; }

        public virtual bool IsActive { get; set; }

        [CanBeNull]
        public virtual string? ConditionSettings { get; set; }

        public virtual Guid? rootId { get; set; }

        public virtual Guid? TransportationSetRootId { get; set; }

        protected ShippingWorkflowBase()
        {

        }

        public ShippingWorkflowBase(Guid id, bool isActive, string? name = null, string? transportationType = null, string? mode = null, string? incoterms = null, string? conditionSettings = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            Id = id;
            IsActive = isActive;
            Name = name;
            TransportationType = transportationType;
            Mode = mode;
            Incoterms = incoterms;
            ConditionSettings = conditionSettings;
            this.rootId = rootId;
            TransportationSetRootId = transportationSetRootId;
        }

    }
}