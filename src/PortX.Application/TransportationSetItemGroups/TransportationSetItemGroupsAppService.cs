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
using PortX.TransportationSetItemGroups;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.TransportationSetItemGroups
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.TransportationSetItemGroups.Default)]
    public abstract class TransportationSetItemGroupsAppServiceBase : PortXAppService
    {
        protected IDistributedCache<TransportationSetItemGroupDownloadTokenCacheItem, string> _downloadTokenCache;
        protected ITransportationSetItemGroupRepository _transportationSetItemGroupRepository;
        protected TransportationSetItemGroupManager _transportationSetItemGroupManager;

        public TransportationSetItemGroupsAppServiceBase(ITransportationSetItemGroupRepository transportationSetItemGroupRepository, TransportationSetItemGroupManager transportationSetItemGroupManager, IDistributedCache<TransportationSetItemGroupDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _transportationSetItemGroupRepository = transportationSetItemGroupRepository;
            _transportationSetItemGroupManager = transportationSetItemGroupManager;

        }

        public virtual async Task<PagedResultDto<TransportationSetItemGroupDto>> GetListAsync(GetTransportationSetItemGroupsInput input)
        {
            var totalCount = await _transportationSetItemGroupRepository.GetCountAsync(input.FilterText, input.Name, input.OrderMin, input.OrderMax, input.Type, input.RootId, input.TransportationSetRootId);
            var items = await _transportationSetItemGroupRepository.GetListAsync(input.FilterText, input.Name, input.OrderMin, input.OrderMax, input.Type, input.RootId, input.TransportationSetRootId, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<TransportationSetItemGroupDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<TransportationSetItemGroup>, List<TransportationSetItemGroupDto>>(items)
            };
        }

        public virtual async Task<TransportationSetItemGroupDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<TransportationSetItemGroup, TransportationSetItemGroupDto>(await _transportationSetItemGroupRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.TransportationSetItemGroups.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _transportationSetItemGroupRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.TransportationSetItemGroups.Create)]
        public virtual async Task<TransportationSetItemGroupDto> CreateAsync(TransportationSetItemGroupCreateDto input)
        {

            var transportationSetItemGroup = await _transportationSetItemGroupManager.CreateAsync(
            input.Name, input.Order, input.Type, input.RootId, input.TransportationSetRootId
            );

            return ObjectMapper.Map<TransportationSetItemGroup, TransportationSetItemGroupDto>(transportationSetItemGroup);
        }

        [Authorize(PortXPermissions.TransportationSetItemGroups.Edit)]
        public virtual async Task<TransportationSetItemGroupDto> UpdateAsync(Guid id, TransportationSetItemGroupUpdateDto input)
        {

            var transportationSetItemGroup = await _transportationSetItemGroupManager.UpdateAsync(
            id,
            input.Name, input.Order, input.Type, input.RootId, input.TransportationSetRootId, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<TransportationSetItemGroup, TransportationSetItemGroupDto>(transportationSetItemGroup);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemGroupExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _transportationSetItemGroupRepository.GetListAsync(input.FilterText, input.Name, input.OrderMin, input.OrderMax, input.Type, input.RootId, input.TransportationSetRootId);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<TransportationSetItemGroup>, List<TransportationSetItemGroupExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "TransportationSetItemGroups.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.TransportationSetItemGroups.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> transportationsetitemgroupIds)
        {
            await _transportationSetItemGroupRepository.DeleteManyAsync(transportationsetitemgroupIds);
        }

        [Authorize(PortXPermissions.TransportationSetItemGroups.Delete)]
        public virtual async Task DeleteAllAsync(GetTransportationSetItemGroupsInput input)
        {
            await _transportationSetItemGroupRepository.DeleteAllAsync(input.FilterText, input.Name, input.OrderMin, input.OrderMax, input.Type, input.RootId, input.TransportationSetRootId);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new TransportationSetItemGroupDownloadTokenCacheItem { Token = token },
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