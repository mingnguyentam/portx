using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class TransportationSetSupplierViewTemplateCreateDtoBase
    {
        public Guid? SupplierTenantId { get; set; }
        public Guid? TransportationSetViewTemplateRootId { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? RootId { get; set; }
        public Guid? ShippingRootId { get; set; }
    }
}