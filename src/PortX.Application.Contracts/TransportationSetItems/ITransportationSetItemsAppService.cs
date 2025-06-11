using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.TransportationSetItems
{
    public partial interface ITransportationSetItemsAppService : IApplicationService
    {

        Task<PagedResultDto<TransportationSetItemDto>> GetListAsync(GetTransportationSetItemsInput input);

        Task<TransportationSetItemDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<TransportationSetItemDto> CreateAsync(TransportationSetItemCreateDto input);

        Task<TransportationSetItemDto> UpdateAsync(Guid id, TransportationSetItemUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetItemExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> transportationsetitemIds);

        Task DeleteAllAsync(GetTransportationSetItemsInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}