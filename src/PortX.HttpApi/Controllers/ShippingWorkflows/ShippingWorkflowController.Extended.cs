using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.ShippingWorkflows;

namespace PortX.Controllers.ShippingWorkflows
{
    [RemoteService]
    [Area("app")]
    [ControllerName("ShippingWorkflow")]
    [Route("api/app/shipping-workflows")]

    public class ShippingWorkflowController : ShippingWorkflowControllerBase, IShippingWorkflowsAppService
    {
        public ShippingWorkflowController(IShippingWorkflowsAppService shippingWorkflowsAppService) : base(shippingWorkflowsAppService)
        {
        }
    }
}