using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetSupplierViewTemplates;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.TransportationSetSupplierViewTemplates
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetSupplierViewTemplate")]
    [Route("api/app/transportation-set-supplier-view-templates")]

    public abstract class TransportationSetSupplierViewTemplateControllerBase : AbpController
    {
        protected ITransportationSetSupplierViewTemplatesAppService _transportationSetSupplierViewTemplatesAppService;

        public TransportationSetSupplierViewTemplateControllerBase(ITransportationSetSupplierViewTemplatesAppService transportationSetSupplierViewTemplatesAppService)
        {
            _transportationSetSupplierViewTemplatesAppService = transportationSetSupplierViewTemplatesAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<TransportationSetSupplierViewTemplateDto>> GetListAsync(GetTransportationSetSupplierViewTemplatesInput input)
        {
            return _transportationSetSupplierViewTemplatesAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<TransportationSetSupplierViewTemplateDto> GetAsync(Guid id)
        {
            return _transportationSetSupplierViewTemplatesAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<TransportationSetSupplierViewTemplateDto> CreateAsync(TransportationSetSupplierViewTemplateCreateDto input)
        {
            return _transportationSetSupplierViewTemplatesAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<TransportationSetSupplierViewTemplateDto> UpdateAsync(Guid id, TransportationSetSupplierViewTemplateUpdateDto input)
        {
            return _transportationSetSupplierViewTemplatesAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _transportationSetSupplierViewTemplatesAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetSupplierViewTemplateExcelDownloadDto input)
        {
            return _transportationSetSupplierViewTemplatesAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _transportationSetSupplierViewTemplatesAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> transportationsetsupplierviewtemplateIds)
        {
            return _transportationSetSupplierViewTemplatesAppService.DeleteByIdsAsync(transportationsetsupplierviewtemplateIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetTransportationSetSupplierViewTemplatesInput input)
        {
            return _transportationSetSupplierViewTemplatesAppService.DeleteAllAsync(input);
        }
    }
}