using Asp.Versioning;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.ChatGroups;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.Controllers.ChatGroups
{
    [RemoteService]
    [Area("app")]
    [ControllerName("ChatGroup")]
    [Route("api/app/chat-groups")]

    public abstract class ChatGroupControllerBase : AbpController
    {
        protected IChatGroupsAppService _chatGroupsAppService;

        public ChatGroupControllerBase(IChatGroupsAppService chatGroupsAppService)
        {
            _chatGroupsAppService = chatGroupsAppService;
        }

        [HttpGet]
        public virtual Task<PagedResultDto<ChatGroupDto>> GetListAsync(GetChatGroupsInput input)
        {
            return _chatGroupsAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<ChatGroupDto> GetAsync(Guid id)
        {
            return _chatGroupsAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<ChatGroupDto> CreateAsync(ChatGroupCreateDto input)
        {
            return _chatGroupsAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<ChatGroupDto> UpdateAsync(Guid id, ChatGroupUpdateDto input)
        {
            return _chatGroupsAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return _chatGroupsAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("as-excel-file")]
        public virtual Task<IRemoteStreamContent> GetListAsExcelFileAsync(ChatGroupExcelDownloadDto input)
        {
            return _chatGroupsAppService.GetListAsExcelFileAsync(input);
        }

        [HttpGet]
        [Route("download-token")]
        public virtual Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            return _chatGroupsAppService.GetDownloadTokenAsync();
        }

        [HttpDelete]
        [Route("")]
        public virtual Task DeleteByIdsAsync(List<Guid> chatgroupIds)
        {
            return _chatGroupsAppService.DeleteByIdsAsync(chatgroupIds);
        }

        [HttpDelete]
        [Route("all")]
        public virtual Task DeleteAllAsync(GetChatGroupsInput input)
        {
            return _chatGroupsAppService.DeleteAllAsync(input);
        }
    }
}