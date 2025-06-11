using System;
using System.Collections.Generic;

using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupDtoBase : FullAuditedEntityDto<Guid>, IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public int? Order { get; set; }
        public string? Type { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;

    }
}