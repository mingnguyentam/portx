using Volo.Abp.Application.Dtos;
using System;

namespace PortX.ShippingWorkflows
{
    public abstract class GetShippingWorkflowsInputBase : PagedAndSortedResultRequestDto
    {

        public string? FilterText { get; set; }

        public string? Name { get; set; }
        public string? TransportationType { get; set; }
        public string? Mode { get; set; }
        public string? Incoterms { get; set; }
        public bool? IsActive { get; set; }
        public string? ConditionSettings { get; set; }
        public Guid? rootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public GetShippingWorkflowsInputBase()
        {

        }
    }
}