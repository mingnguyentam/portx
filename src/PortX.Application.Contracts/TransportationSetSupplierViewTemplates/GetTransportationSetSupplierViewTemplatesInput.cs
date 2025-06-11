using Volo.Abp.Application.Dtos;
using System;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class GetTransportationSetSupplierViewTemplatesInputBase : PagedAndSortedResultRequestDto
    {

        public string? FilterText { get; set; }

        public Guid? SupplierTenantId { get; set; }
        public Guid? TransportationSetViewTemplateRootId { get; set; }
        public Guid? SupplierId { get; set; }
        public Guid? RootId { get; set; }
        public Guid? ShippingRootId { get; set; }

        public GetTransportationSetSupplierViewTemplatesInputBase()
        {

        }
    }
}