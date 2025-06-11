using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.ChatGroups
{
    public partial interface IChatGroupsAppService : IApplicationService
    {

        Task<PagedResultDto<ChatGroupDto>> GetListAsync(GetChatGroupsInput input);

        Task<ChatGroupDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<ChatGroupDto> CreateAsync(ChatGroupCreateDto input);

        Task<ChatGroupDto> UpdateAsync(Guid id, ChatGroupUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(ChatGroupExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> chatgroupIds);

        Task DeleteAllAsync(GetChatGroupsInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}