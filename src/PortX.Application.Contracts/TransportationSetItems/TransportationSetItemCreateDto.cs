using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemCreateDtoBase
    {
        public string? Name { get; set; }
        public string? Type { get; set; }
        public string? Attributes { get; set; }
        public int Order { get; set; } = 0;
        public string? Category { get; set; }
        public bool IsActive { get; set; } = true;
        public bool IsDefault { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
        public Guid? TransportationSetItemGroupRootId { get; set; }
    }
}