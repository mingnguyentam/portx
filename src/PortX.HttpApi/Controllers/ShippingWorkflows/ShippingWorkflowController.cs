using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.ShippingWorkflows;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.ShippingWorkflows
{
    [RemoteService]
    [Area("app")]
    [ControllerName("ShippingWorkflow")]
    [Route("api/app/shipping-workflows")]

    public abstract class ShippingWorkflowControllerBase : AbpController
    {
        protected IShippingWorkflowsAppService _shippingWorkflowsAppService;

        public ShippingWorkflowControllerBase(IShippingWorkflowsAppService shippingWorkflowsAppService)
        {
            _shippingWorkflowsAppService = shippingWorkflowsAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<ShippingWorkflowDto>> GetListAsync(GetShippingWorkflowsInput input)
        {
            return _shippingWorkflowsAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<ShippingWorkflowDto> GetAsync(Guid id)
        {
            return _shippingWorkflowsAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<ShippingWorkflowDto> CreateAsync(ShippingWorkflowCreateDto input)
        {
            return _shippingWorkflowsAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<ShippingWorkflowDto> UpdateAsync(Guid id, ShippingWorkflowUpdateDto input)
        {
            return _shippingWorkflowsAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _shippingWorkflowsAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(ShippingWorkflowExcelDownloadDto input)
        {
            return _shippingWorkflowsAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _shippingWorkflowsAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> shippingworkflowIds)
        {
            return _shippingWorkflowsAppService.DeleteByIdsAsync(shippingworkflowIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetShippingWorkflowsInput input)
        {
            return _shippingWorkflowsAppService.DeleteAllAsync(input);
        }
    }
}