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
using PortX.TransportationSetItems;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.TransportationSetItems
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.TransportationSetItems.Default)]
    public abstract class TransportationSetItemsAppServiceBase : PortXAppService
    {
        protected IDistributedCache<TransportationSetItemDownloadTokenCacheItem, string> _downloadTokenCache;
        protected ITransportationSetItemRepository _transportationSetItemRepository;
        protected TransportationSetItemManager _transportationSetItemManager;

        public TransportationSetItemsAppServiceBase(ITransportationSetItemRepository transportationSetItemRepository, TransportationSetItemManager transportationSetItemManager, IDistributedCache<TransportationSetItemDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _transportationSetItemRepository = transportationSetItemRepository;
            _transportationSetItemManager = transportationSetItemManager;

        }

        public virtual async Task<PagedResultDto<TransportationSetItemDto>> GetListAsync(GetTransportationSetItemsInput input)
        {
            var totalCount = await _transportationSetItemRepository.GetCountAsync(input.FilterText, input.Name, input.Type, input.Attributes, input.OrderMin, input.OrderMax, input.Category, input.IsActive, input.IsDefault, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId);
            var items = await _transportationSetItemRepository.GetListAsync(input.FilterText, input.Name, input.Type, input.Attributes, input.OrderMin, input.OrderMax, input.Category, input.IsActive, input.IsDefault, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<TransportationSetItemDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<TransportationSetItem>, List<TransportationSetItemDto>>(items)
            };
        }

        public virtual async Task<TransportationSetItemDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<TransportationSetItem, TransportationSetItemDto>(await _transportationSetItemRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.TransportationSetItems.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _transportationSetItemRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.TransportationSetItems.Create)]
        public virtual async Task<TransportationSetItemDto> CreateAsync(TransportationSetItemCreateDto input)
        {

            var transportationSetItem = await _transportationSetItemManager.CreateAsync(
            input.Order, input.IsActive, input.IsDefault, input.Name, input.Type, input.Attributes, input.Category, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId
            );

            return ObjectMapper.Map<TransportationSetItem, TransportationSetItemDto>(transportationSetItem);
        }

        [Authorize(PortXPermissions.TransportationSetItems.Edit)]
        public virtual async Task<TransportationSetItemDto> UpdateAsync(Guid id, TransportationSetItemUpdateDto input)
        {

            var transportationSetItem = await _transportationSetItemManager.UpdateAsync(
            id,
            input.Order, input.IsActive, input.IsDefault, input.Name, input.Type, input.Attributes, input.Category, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<TransportationSetItem, TransportationSetItemDto>(transportationSetItem);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _transportationSetItemRepository.GetListAsync(input.FilterText, input.Name, input.Type, input.Attributes, input.OrderMin, input.OrderMax, input.Category, input.IsActive, input.IsDefault, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<TransportationSetItem>, List<TransportationSetItemExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "TransportationSetItems.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.TransportationSetItems.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> transportationsetitemIds)
        {
            await _transportationSetItemRepository.DeleteManyAsync(transportationsetitemIds);
        }

        [Authorize(PortXPermissions.TransportationSetItems.Delete)]
        public virtual async Task DeleteAllAsync(GetTransportationSetItemsInput input)
        {
            await _transportationSetItemRepository.DeleteAllAsync(input.FilterText, input.Name, input.Type, input.Attributes, input.OrderMin, input.OrderMax, input.Category, input.IsActive, input.IsDefault, input.RootId, input.TransportationSetRootId, input.TransportationSetItemGroupRootId);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new TransportationSetItemDownloadTokenCacheItem { Token = token },
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