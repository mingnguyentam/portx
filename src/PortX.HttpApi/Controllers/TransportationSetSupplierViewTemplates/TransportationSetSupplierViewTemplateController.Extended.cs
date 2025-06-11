using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetSupplierViewTemplates;

namespace PortX.Controllers.TransportationSetSupplierViewTemplates
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetSupplierViewTemplate")]
    [Route("api/app/transportation-set-supplier-view-templates")]

    public class TransportationSetSupplierViewTemplateController : TransportationSetSupplierViewTemplateControllerBase, ITransportationSetSupplierViewTemplatesAppService
    {
        public TransportationSetSupplierViewTemplateController(ITransportationSetSupplierViewTemplatesAppService transportationSetSupplierViewTemplatesAppService) : base(transportationSetSupplierViewTemplatesAppService)
        {
        }
    }
}