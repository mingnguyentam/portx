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
using PortX.ChatGroups;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.ChatGroups
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.ChatGroups.Default)]
    public abstract class ChatGroupsAppServiceBase : PortXAppService
    {
        protected IDistributedCache<ChatGroupDownloadTokenCacheItem, string> _downloadTokenCache;
        protected IChatGroupRepository _chatGroupRepository;
        protected ChatGroupManager _chatGroupManager;

        public ChatGroupsAppServiceBase(IChatGroupRepository chatGroupRepository, ChatGroupManager chatGroupManager, IDistributedCache<ChatGroupDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _chatGroupRepository = chatGroupRepository;
            _chatGroupManager = chatGroupManager;

        }

        public virtual async Task<PagedResultDto<ChatGroupDto>> GetListAsync(GetChatGroupsInput input)
        {
            var totalCount = await _chatGroupRepository.GetCountAsync(input.FilterText, input.Name, input.Description, input.IsActive, input.ProviderName, input.ProviderKey);
            var items = await _chatGroupRepository.GetListAsync(input.FilterText, input.Name, input.Description, input.IsActive, input.ProviderName, input.ProviderKey, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<ChatGroupDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<ChatGroup>, List<ChatGroupDto>>(items)
            };
        }

        public virtual async Task<ChatGroupDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<ChatGroup, ChatGroupDto>(await _chatGroupRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.ChatGroups.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _chatGroupRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.ChatGroups.Create)]
        public virtual async Task<ChatGroupDto> CreateAsync(ChatGroupCreateDto input)
        {

            var chatGroup = await _chatGroupManager.CreateAsync(
            input.IsActive, input.Name, input.Description, input.ProviderName, input.ProviderKey
            );

            return ObjectMapper.Map<ChatGroup, ChatGroupDto>(chatGroup);
        }

        [Authorize(PortXPermissions.ChatGroups.Edit)]
        public virtual async Task<ChatGroupDto> UpdateAsync(Guid id, ChatGroupUpdateDto input)
        {

            var chatGroup = await _chatGroupManager.UpdateAsync(
            id,
            input.IsActive, input.Name, input.Description, input.ProviderName, input.ProviderKey, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<ChatGroup, ChatGroupDto>(chatGroup);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(ChatGroupExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _chatGroupRepository.GetListAsync(input.FilterText, input.Name, input.Description, input.IsActive, input.ProviderName, input.ProviderKey);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<ChatGroup>, List<ChatGroupExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "ChatGroups.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.ChatGroups.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> chatgroupIds)
        {
            await _chatGroupRepository.DeleteManyAsync(chatgroupIds);
        }

        [Authorize(PortXPermissions.ChatGroups.Delete)]
        public virtual async Task DeleteAllAsync(GetChatGroupsInput input)
        {
            await _chatGroupRepository.DeleteAllAsync(input.FilterText, input.Name, input.Description, input.IsActive, input.ProviderName, input.ProviderKey);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new ChatGroupDownloadTokenCacheItem { Token = token },
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