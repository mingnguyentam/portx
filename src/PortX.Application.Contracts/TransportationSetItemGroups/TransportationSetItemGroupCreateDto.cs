using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupCreateDtoBase
    {
        public string? Name { get; set; }
        public int? Order { get; set; }
        public string? Type { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
    }
}