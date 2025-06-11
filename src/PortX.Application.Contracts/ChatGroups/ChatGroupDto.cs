using System;
using System.Collections.Generic;

using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupDtoBase : FullAuditedEntityDto<Guid>, IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public string? ProviderName { get; set; }
        public Guid? ProviderKey { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;

    }
}