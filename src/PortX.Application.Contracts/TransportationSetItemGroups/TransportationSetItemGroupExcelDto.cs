using System;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupExcelDtoBase
    {
        public string? Name { get; set; }
        public int? Order { get; set; }
        public string? Type { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
    }
}