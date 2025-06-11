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
using PortX.TransportationSetViewTemplates;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.TransportationSetViewTemplates
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.TransportationSetViewTemplates.Default)]
    public abstract class TransportationSetViewTemplatesAppServiceBase : PortXAppService
    {
        protected IDistributedCache<TransportationSetViewTemplateDownloadTokenCacheItem, string> _downloadTokenCache;
        protected ITransportationSetViewTemplateRepository _transportationSetViewTemplateRepository;
        protected TransportationSetViewTemplateManager _transportationSetViewTemplateManager;

        public TransportationSetViewTemplatesAppServiceBase(ITransportationSetViewTemplateRepository transportationSetViewTemplateRepository, TransportationSetViewTemplateManager transportationSetViewTemplateManager, IDistributedCache<TransportationSetViewTemplateDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _transportationSetViewTemplateRepository = transportationSetViewTemplateRepository;
            _transportationSetViewTemplateManager = transportationSetViewTemplateManager;

        }

        public virtual async Task<PagedResultDto<TransportationSetViewTemplateDto>> GetListAsync(GetTransportationSetViewTemplatesInput input)
        {
            var totalCount = await _transportationSetViewTemplateRepository.GetCountAsync(input.FilterText, input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId);
            var items = await _transportationSetViewTemplateRepository.GetListAsync(input.FilterText, input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<TransportationSetViewTemplateDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<TransportationSetViewTemplate>, List<TransportationSetViewTemplateDto>>(items)
            };
        }

        public virtual async Task<TransportationSetViewTemplateDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<TransportationSetViewTemplate, TransportationSetViewTemplateDto>(await _transportationSetViewTemplateRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.TransportationSetViewTemplates.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _transportationSetViewTemplateRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.TransportationSetViewTemplates.Create)]
        public virtual async Task<TransportationSetViewTemplateDto> CreateAsync(TransportationSetViewTemplateCreateDto input)
        {

            var transportationSetViewTemplate = await _transportationSetViewTemplateManager.CreateAsync(
            input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId
            );

            return ObjectMapper.Map<TransportationSetViewTemplate, TransportationSetViewTemplateDto>(transportationSetViewTemplate);
        }

        [Authorize(PortXPermissions.TransportationSetViewTemplates.Edit)]
        public virtual async Task<TransportationSetViewTemplateDto> UpdateAsync(Guid id, TransportationSetViewTemplateUpdateDto input)
        {

            var transportationSetViewTemplate = await _transportationSetViewTemplateManager.UpdateAsync(
            id,
            input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<TransportationSetViewTemplate, TransportationSetViewTemplateDto>(transportationSetViewTemplate);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetViewTemplateExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _transportationSetViewTemplateRepository.GetListAsync(input.FilterText, input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<TransportationSetViewTemplate>, List<TransportationSetViewTemplateExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "TransportationSetViewTemplates.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.TransportationSetViewTemplates.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> transportationsetviewtemplateIds)
        {
            await _transportationSetViewTemplateRepository.DeleteManyAsync(transportationsetviewtemplateIds);
        }

        [Authorize(PortXPermissions.TransportationSetViewTemplates.Delete)]
        public virtual async Task DeleteAllAsync(GetTransportationSetViewTemplatesInput input)
        {
            await _transportationSetViewTemplateRepository.DeleteAllAsync(input.FilterText, input.Name, input.Description, input.Data, input.RootId, input.TransportationSetRootId);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new TransportationSetViewTemplateDownloadTokenCacheItem { Token = token },
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