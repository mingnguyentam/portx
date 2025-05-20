using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Content;
using PortX.Shared;

namespace PortX.ShippingWorkflows
{
    public partial interface IShippingWorkflowsAppService : IApplicationService
    {

        Task<PagedResultDto<ShippingWorkflowDto>> GetListAsync(GetShippingWorkflowsInput input);

        Task<ShippingWorkflowDto> GetAsync(Guid id);

        Task DeleteAsync(Guid id);

        Task<ShippingWorkflowDto> CreateAsync(ShippingWorkflowCreateDto input);

        Task<ShippingWorkflowDto> UpdateAsync(Guid id, ShippingWorkflowUpdateDto input);

        Task<IRemoteStreamContent> GetListAsExcelFileAsync(ShippingWorkflowExcelDownloadDto input);
        Task DeleteByIdsAsync(List<Guid> shippingworkflowIds);

        Task DeleteAllAsync(GetShippingWorkflowsInput input);
        Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync();

    }
}