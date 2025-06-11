using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.TransportationSetItemGroups;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.TransportationSetItemGroups
{
    [RemoteService]
    [Area("app")]
    [ControllerName("TransportationSetItemGroup")]
    [Route("api/app/transportation-set-item-groups")]

    public abstract class TransportationSetItemGroupControllerBase : AbpController
    {
        protected ITransportationSetItemGroupsAppService _transportationSetItemGroupsAppService;

        public TransportationSetItemGroupControllerBase(ITransportationSetItemGroupsAppService transportationSetItemGroupsAppService)
        {
            _transportationSetItemGroupsAppService = transportationSetItemGroupsAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<TransportationSetItemGroupDto>> GetListAsync(GetTransportationSetItemGroupsInput input)
        {
            return _transportationSetItemGroupsAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<TransportationSetItemGroupDto> GetAsync(Guid id)
        {
            return _transportationSetItemGroupsAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<TransportationSetItemGroupDto> CreateAsync(TransportationSetItemGroupCreateDto input)
        {
            return _transportationSetItemGroupsAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<TransportationSetItemGroupDto> UpdateAsync(Guid id, TransportationSetItemGroupUpdateDto input)
        {
            return _transportationSetItemGroupsAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _transportationSetItemGroupsAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemGroupExcelDownloadDto input)
        {
            return _transportationSetItemGroupsAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _transportationSetItemGroupsAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> transportationsetitemgroupIds)
        {
            return _transportationSetItemGroupsAppService.DeleteByIdsAsync(transportationsetitemgroupIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetTransportationSetItemGroupsInput input)
        {
            return _transportationSetItemGroupsAppService.DeleteAllAsync(input);
        }
    }
}