using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetViewTemplates;

namespace PortX.Controllers.TransportationSetViewTemplates
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetViewTemplate")]
    [Route("api/app/transportation-set-view-templates")]

    public class TransportationSetViewTemplateController : TransportationSetViewTemplateControllerBase, ITransportationSetViewTemplatesAppService
    {
        public TransportationSetViewTemplateController(ITransportationSetViewTemplatesAppService transportationSetViewTemplatesAppService) : base(transportationSetViewTemplatesAppService)
        {
        }
    }
}