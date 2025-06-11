using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class TransportationSetSupplierViewTemplateUpdateDtoBase : IHasConcurrencyStamp
    {
        public Guid? SupplierTenantId { get; set; }
        public Guid? TransportationSetViewTemplateRootId { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? RootId { get; set; }
        public Guid? ShippingRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;
    }
}