using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        [CanBeNull]
        public virtual string? Name { get; set; }

        [CanBeNull]
        public virtual string? Type { get; set; }

        [CanBeNull]
        public virtual string? Attributes { get; set; }

        public virtual int Order { get; set; }

        [CanBeNull]
        public virtual string? Category { get; set; }

        public virtual bool IsActive { get; set; }

        public virtual bool IsDefault { get; set; }

        public virtual Guid? RootId { get; set; }

        public virtual Guid? TransportationSetRootId { get; set; }

        public virtual Guid? TransportationSetItemGroupRootId { get; set; }

        protected TransportationSetItemBase()
        {

        }

        public TransportationSetItemBase(Guid id, int order, bool isActive, bool isDefault, string? name = null, string? type = null, string? attributes = null, string? category = null, Guid? rootId = null, Guid? transportationSetRootId = null, Guid? transportationSetItemGroupRootId = null)
        {

            Id = id;
            Order = order;
            IsActive = isActive;
            IsDefault = isDefault;
            Name = name;
            Type = type;
            Attributes = attributes;
            Category = category;
            RootId = rootId;
            TransportationSetRootId = transportationSetRootId;
            TransportationSetItemGroupRootId = transportationSetItemGroupRootId;
        }

    }
}