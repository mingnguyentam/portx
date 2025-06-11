using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        [CanBeNull]
        public virtual string? Name { get; set; }

        [CanBeNull]
        public virtual string? Description { get; set; }

        public virtual bool IsActive { get; set; }

        [CanBeNull]
        public virtual string? ProviderName { get; set; }

        public virtual Guid? ProviderKey { get; set; }

        protected ChatGroupBase()
        {

        }

        public ChatGroupBase(Guid id, bool isActive, string? name = null, string? description = null, string? providerName = null, Guid? providerKey = null)
        {

            Id = id;
            IsActive = isActive;
            Name = name;
            Description = description;
            ProviderName = providerName;
            ProviderKey = providerKey;
        }

    }
}