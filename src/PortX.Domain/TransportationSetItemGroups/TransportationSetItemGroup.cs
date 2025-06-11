using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        [CanBeNull]
        public virtual string? Name { get; set; }

        public virtual int? Order { get; set; }

        [CanBeNull]
        public virtual string? Type { get; set; }

        public virtual Guid? RootId { get; set; }

        public virtual Guid? TransportationSetRootId { get; set; }

        protected TransportationSetItemGroupBase()
        {

        }

        public TransportationSetItemGroupBase(Guid id, string? name = null, int? order = null, string? type = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            Id = id;
            Name = name;
            Order = order;
            Type = type;
            RootId = rootId;
            TransportationSetRootId = transportationSetRootId;
        }

    }
}