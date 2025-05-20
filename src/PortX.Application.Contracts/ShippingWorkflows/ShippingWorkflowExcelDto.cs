using System;

namespace PortX.ShippingWorkflows
{
    public abstract class ShippingWorkflowExcelDtoBase
    {
        public string? Name { get; set; }
        public string? TransportationType { get; set; }
        public string? Mode { get; set; }
        public string? Incoterms { get; set; }
        public bool IsActive { get; set; }
        public string? ConditionSettings { get; set; }
        public Guid? rootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
    }
}