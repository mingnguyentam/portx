using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetItems;

namespace PortX.Controllers.TransportationSetItems
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetItem")]
    [Route("api/app/transportation-set-items")]

    public class TransportationSetItemController : TransportationSetItemControllerBase, ITransportationSetItemsAppService
    {
        public TransportationSetItemController(ITransportationSetItemsAppService transportationSetItemsAppService) : base(transportationSetItemsAppService)
        {
        }
    }
}