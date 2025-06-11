using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.TransportationSetViewTemplates
{
    public partial interface ITransportationSetViewTemplatesAppService : IApplicationService
    {

        Task<PagedResultDto<TransportationSetViewTemplateDto>> GetListAsync(GetTransportationSetViewTemplatesInput input);

        Task<TransportationSetViewTemplateDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<TransportationSetViewTemplateDto> CreateAsync(TransportationSetViewTemplateCreateDto input);

        Task<TransportationSetViewTemplateDto> UpdateAsync(Guid id, TransportationSetViewTemplateUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetViewTemplateExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> transportationsetviewtemplateIds);

        Task DeleteAllAsync(GetTransportationSetViewTemplatesInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}