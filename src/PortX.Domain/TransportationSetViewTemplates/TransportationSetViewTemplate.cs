using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        [CanBeNull]
        public virtual string? Name { get; set; }

        [CanBeNull]
        public virtual string? Description { get; set; }

        [CanBeNull]
        public virtual string? Data { get; set; }

        public virtual Guid? RootId { get; set; }

        public virtual Guid? TransportationSetRootId { get; set; }

        protected TransportationSetViewTemplateBase()
        {

        }

        public TransportationSetViewTemplateBase(Guid id, string? name = null, string? description = null, string? data = null, Guid? rootId = null, Guid? transportationSetRootId = null)
        {

            Id = id;
            Name = name;
            Description = description;
            Data = data;
            RootId = rootId;
            TransportationSetRootId = transportationSetRootId;
        }

    }
}