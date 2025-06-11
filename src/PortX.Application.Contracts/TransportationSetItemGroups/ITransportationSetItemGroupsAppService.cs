using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.TransportationSetItemGroups
{
    public partial interface ITransportationSetItemGroupsAppService : IApplicationService
    {

        Task<PagedResultDto<TransportationSetItemGroupDto>> GetListAsync(GetTransportationSetItemGroupsInput input);

        Task<TransportationSetItemGroupDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<TransportationSetItemGroupDto> CreateAsync(TransportationSetItemGroupCreateDto input);

        Task<TransportationSetItemGroupDto> UpdateAsync(Guid id, TransportationSetItemGroupUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemGroupExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> transportationsetitemgroupIds);

        Task DeleteAllAsync(GetTransportationSetItemGroupsInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}