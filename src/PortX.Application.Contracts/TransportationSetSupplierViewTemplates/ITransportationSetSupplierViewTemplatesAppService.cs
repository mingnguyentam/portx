using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public partial interface ITransportationSetSupplierViewTemplatesAppService : IApplicationService
    {

        Task<PagedResultDto<TransportationSetSupplierViewTemplateDto>> GetListAsync(GetTransportationSetSupplierViewTemplatesInput input);

        Task<TransportationSetSupplierViewTemplateDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<TransportationSetSupplierViewTemplateDto> CreateAsync(TransportationSetSupplierViewTemplateCreateDto input);

        Task<TransportationSetSupplierViewTemplateDto> UpdateAsync(Guid id, TransportationSetSupplierViewTemplateUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetSupplierViewTemplateExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> transportationsetsupplierviewtemplateIds);

        Task DeleteAllAsync(GetTransportationSetSupplierViewTemplatesInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}