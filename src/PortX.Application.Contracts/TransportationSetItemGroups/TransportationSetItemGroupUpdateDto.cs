using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupUpdateDtoBase : IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public int? Order { get; set; }
        public string? Type { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;
    }
}