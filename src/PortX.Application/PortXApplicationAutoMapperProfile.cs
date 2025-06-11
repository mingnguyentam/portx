using PortX.TransportationSetViewTemplates;
using PortX.TransportationSetSupplierViewTemplates;
using PortX.TransportationSetItemGroups;
using PortX.TransportationSetItems;
using System;
using PortX.Shared;
using Volo.Abp.AutoMapper;
using PortX.ShippingWorkflows;
using AutoMapper;

namespace PortX;

public class PortXApplicationAutoMapperProfile : Profile
{
    public PortXApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */

        CreateMap<ShippingWorkflow, ShippingWorkflowDto>();
        CreateMap<ShippingWorkflow, ShippingWorkflowExcelDto>();

        CreateMap<TransportationSetItem, TransportationSetItemDto>();
        CreateMap<TransportationSetItem, TransportationSetItemExcelDto>();

        CreateMap<TransportationSetItemGroup, TransportationSetItemGroupDto>();
        CreateMap<TransportationSetItemGroup, TransportationSetItemGroupExcelDto>();

        CreateMap<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplateDto>();
        CreateMap<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplateExcelDto>();

        CreateMap<TransportationSetViewTemplate, TransportationSetViewTemplateDto>();
        CreateMap<TransportationSetViewTemplate, TransportationSetViewTemplateExcelDto>();
    }
}