using System;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemExcelDtoBase
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
    }
}