using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetViewTemplates;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.TransportationSetViewTemplates
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetViewTemplate")]
    [Route("api/app/transportation-set-view-templates")]

    public abstract class TransportationSetViewTemplateControllerBase : AbpController
    {
        protected ITransportationSetViewTemplatesAppService _transportationSetViewTemplatesAppService;

        public TransportationSetViewTemplateControllerBase(ITransportationSetViewTemplatesAppService transportationSetViewTemplatesAppService)
        {
            _transportationSetViewTemplatesAppService = transportationSetViewTemplatesAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<TransportationSetViewTemplateDto>> GetListAsync(GetTransportationSetViewTemplatesInput input)
        {
            return _transportationSetViewTemplatesAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<TransportationSetViewTemplateDto> GetAsync(Guid id)
        {
            return _transportationSetViewTemplatesAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<TransportationSetViewTemplateDto> CreateAsync(TransportationSetViewTemplateCreateDto input)
        {
            return _transportationSetViewTemplatesAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<TransportationSetViewTemplateDto> UpdateAsync(Guid id, TransportationSetViewTemplateUpdateDto input)
        {
            return _transportationSetViewTemplatesAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _transportationSetViewTemplatesAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetViewTemplateExcelDownloadDto input)
        {
            return _transportationSetViewTemplatesAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _transportationSetViewTemplatesAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> transportationsetviewtemplateIds)
        {
            return _transportationSetViewTemplatesAppService.DeleteByIdsAsync(transportationsetviewtemplateIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetTransportationSetViewTemplatesInput input)
        {
            return _transportationSetViewTemplatesAppService.DeleteAllAsync(input);
        }
    }
}