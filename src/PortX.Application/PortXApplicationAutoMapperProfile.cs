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
    }
}