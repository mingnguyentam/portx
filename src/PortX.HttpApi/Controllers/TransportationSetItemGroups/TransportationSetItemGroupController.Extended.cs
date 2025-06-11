using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetItemGroups;

namespace PortX.Controllers.TransportationSetItemGroups
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetItemGroup")]
    [Route("api/app/transportation-set-item-groups")]

    public class TransportationSetItemGroupController : TransportationSetItemGroupControllerBase, ITransportationSetItemGroupsAppService
    {
        public TransportationSetItemGroupController(ITransportationSetItemGroupsAppService transportationSetItemGroupsAppService) : base(transportationSetItemGroupsAppService)
        {
        }
    }
}