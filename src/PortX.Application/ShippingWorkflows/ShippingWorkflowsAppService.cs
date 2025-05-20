using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using PortX.Permissions;
using PortX.ShippingWorkflows;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.ShippingWorkflows
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.ShippingWorkflows.Default)]
    public abstract class ShippingWorkflowsAppServiceBase : PortXAppService
    {
        protected IDistributedCache<ShippingWorkflowDownloadTokenCacheItem, string> _downloadTokenCache;
        protected IShippingWorkflowRepository _shippingWorkflowRepository;
        protected ShippingWorkflowManager _shippingWorkflowManager;

        public ShippingWorkflowsAppServiceBase(IShippingWorkflowRepository shippingWorkflowRepository, ShippingWorkflowManager shippingWorkflowManager, IDistributedCache<ShippingWorkflowDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _shippingWorkflowRepository = shippingWorkflowRepository;
            _shippingWorkflowManager = shippingWorkflowManager;

        }

        public virtual async Task<PagedResultDto<ShippingWorkflowDto>> GetListAsync(GetShippingWorkflowsInput input)
        {
            var totalCount = await _shippingWorkflowRepository.GetCountAsync(input.FilterText, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.IsActive, input.ConditionSettings, input.rootId, input.TransportationSetRootId);
            var items = await _shippingWorkflowRepository.GetListAsync(input.FilterText, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.IsActive, input.ConditionSettings, input.rootId, input.TransportationSetRootId, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<ShippingWorkflowDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<ShippingWorkflow>, List<ShippingWorkflowDto>>(items)
            };
        }

        public virtual async Task<ShippingWorkflowDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<ShippingWorkflow, ShippingWorkflowDto>(await _shippingWorkflowRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.ShippingWorkflows.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _shippingWorkflowRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.ShippingWorkflows.Create)]
        public virtual async Task<ShippingWorkflowDto> CreateAsync(ShippingWorkflowCreateDto input)
        {

            var shippingWorkflow = await _shippingWorkflowManager.CreateAsync(
            input.IsActive, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.ConditionSettings, input.rootId, input.TransportationSetRootId
            );

            return ObjectMapper.Map<ShippingWorkflow, ShippingWorkflowDto>(shippingWorkflow);
        }

        [Authorize(PortXPermissions.ShippingWorkflows.Edit)]
        public virtual async Task<ShippingWorkflowDto> UpdateAsync(Guid id, ShippingWorkflowUpdateDto input)
        {

            var shippingWorkflow = await _shippingWorkflowManager.UpdateAsync(
            id,
            input.IsActive, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.ConditionSettings, input.rootId, input.TransportationSetRootId, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<ShippingWorkflow, ShippingWorkflowDto>(shippingWorkflow);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(ShippingWorkflowExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _shippingWorkflowRepository.GetListAsync(input.FilterText, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.IsActive, input.ConditionSettings, input.rootId, input.TransportationSetRootId);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<ShippingWorkflow>, List<ShippingWorkflowExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "ShippingWorkflows.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.ShippingWorkflows.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> shippingworkflowIds)
        {
            await _shippingWorkflowRepository.DeleteManyAsync(shippingworkflowIds);
        }

        [Authorize(PortXPermissions.ShippingWorkflows.Delete)]
        public virtual async Task DeleteAllAsync(GetShippingWorkflowsInput input)
        {
            await _shippingWorkflowRepository.DeleteAllAsync(input.FilterText, input.Name, input.TransportationType, input.Mode, input.Incoterms, input.IsActive, input.ConditionSettings, input.rootId, input.TransportationSetRootId);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new ShippingWorkflowDownloadTokenCacheItem { Token = token },
                new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30)
                });

            return new PortX.Shared.DownloadTokenResultDto
            {
                Token = token
            };
        }
    }
}