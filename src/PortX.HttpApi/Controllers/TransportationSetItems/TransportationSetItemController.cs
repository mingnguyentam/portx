using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetItems;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.TransportationSetItems
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetItem")]
    [Route("api/app/transportation-set-items")]

    public abstract class TransportationSetItemControllerBase : AbpController
    {
        protected ITransportationSetItemsAppService _transportationSetItemsAppService;

        public TransportationSetItemControllerBase(ITransportationSetItemsAppService transportationSetItemsAppService)
        {
            _transportationSetItemsAppService = transportationSetItemsAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<TransportationSetItemDto>> GetListAsync(GetTransportationSetItemsInput input)
        {
            return _transportationSetItemsAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<TransportationSetItemDto> GetAsync(Guid id)
        {
            return _transportationSetItemsAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<TransportationSetItemDto> CreateAsync(TransportationSetItemCreateDto input)
        {
            return _transportationSetItemsAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<TransportationSetItemDto> UpdateAsync(Guid id, TransportationSetItemUpdateDto input)
        {
            return _transportationSetItemsAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _transportationSetItemsAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemExcelDownloadDto input)
        {
            return _transportationSetItemsAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _transportationSetItemsAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> transportationsetitemIds)
        {
            return _transportationSetItemsAppService.DeleteByIdsAsync(transportationsetitemIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetTransportationSetItemsInput input)
        {
            return _transportationSetItemsAppService.DeleteAllAsync(input);
        }
    }
}