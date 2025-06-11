using Asp.Versioning;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using PortX.ChatGroups;

namespace PortX.Controllers.ChatGroups
{
    [RemoteService]
    [Area("app")]
    [ControllerName("ChatGroup")]
    [Route("api/app/chat-groups")]

    public class ChatGroupController : ChatGroupControllerBase, IChatGroupsAppService
    {
        public ChatGroupController(IChatGroupsAppService chatGroupsAppService) : base(chatGroupsAppService)
        {
        }
    }
}