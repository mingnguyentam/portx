using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace PortX.ShippingWorkflows
{
    public abstract class ShippingWorkflowUpdateDtoBase : IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public string? TransportationType { get; set; }
        public string? Mode { get; set; }
        public string? Incoterms { get; set; }
        public bool IsActive { get; set; }
        public string? ConditionSettings { get; set; }
        public Guid? rootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;
    }
}