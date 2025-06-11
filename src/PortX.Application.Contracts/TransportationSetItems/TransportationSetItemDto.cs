using System;
using System.Collections.Generic;

using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemDtoBase : FullAuditedEntityDto<Guid>, IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public string? Type { get; set; }
        public string? Attributes { get; set; }
        public int Order { get; set; }
        public string? Category { get; set; }
        public bool IsActive { get; set; }
        public bool IsDefault { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
        public Guid? TransportationSetItemGroupRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;

    }
}