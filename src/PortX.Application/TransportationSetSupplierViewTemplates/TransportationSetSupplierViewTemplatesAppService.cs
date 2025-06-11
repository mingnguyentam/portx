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
using PortX.TransportationSetSupplierViewTemplates;
using MiniExcelLibs;
using Volo.Abp.Content;
using Volo.Abp.Authorization;
using Volo.Abp.Caching;
using Microsoft.Extensions.Caching.Distributed;
using PortX.Shared;

namespace PortX.TransportationSetSupplierViewTemplates
{
    [RemoteService(IsEnabled = false)]
    [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Default)]
    public abstract class TransportationSetSupplierViewTemplatesAppServiceBase : PortXAppService
    {
        protected IDistributedCache<TransportationSetSupplierViewTemplateDownloadTokenCacheItem, string> _downloadTokenCache;
        protected ITransportationSetSupplierViewTemplateRepository _transportationSetSupplierViewTemplateRepository;
        protected TransportationSetSupplierViewTemplateManager _transportationSetSupplierViewTemplateManager;

        public TransportationSetSupplierViewTemplatesAppServiceBase(ITransportationSetSupplierViewTemplateRepository transportationSetSupplierViewTemplateRepository, TransportationSetSupplierViewTemplateManager transportationSetSupplierViewTemplateManager, IDistributedCache<TransportationSetSupplierViewTemplateDownloadTokenCacheItem, string> downloadTokenCache)
        {
            _downloadTokenCache = downloadTokenCache;
            _transportationSetSupplierViewTemplateRepository = transportationSetSupplierViewTemplateRepository;
            _transportationSetSupplierViewTemplateManager = transportationSetSupplierViewTemplateManager;

        }

        public virtual async Task<PagedResultDto<TransportationSetSupplierViewTemplateDto>> GetListAsync(GetTransportationSetSupplierViewTemplatesInput input)
        {
            var totalCount = await _transportationSetSupplierViewTemplateRepository.GetCountAsync(input.FilterText, input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId);
            var items = await _transportationSetSupplierViewTemplateRepository.GetListAsync(input.FilterText, input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId, input.Sorting, input.MaxResultCount, input.SkipCount);

            return new PagedResultDto<TransportationSetSupplierViewTemplateDto>
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<TransportationSetSupplierViewTemplate>, List<TransportationSetSupplierViewTemplateDto>>(items)
            };
        }

        public virtual async Task<TransportationSetSupplierViewTemplateDto> GetAsync(Guid id)
        {
            return ObjectMapper.Map<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplateDto>(await _transportationSetSupplierViewTemplateRepository.GetAsync(id));
        }

        [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _transportationSetSupplierViewTemplateRepository.DeleteAsync(id);
        }

        [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Create)]
        public virtual async Task<TransportationSetSupplierViewTemplateDto> CreateAsync(TransportationSetSupplierViewTemplateCreateDto input)
        {

            var transportationSetSupplierViewTemplate = await _transportationSetSupplierViewTemplateManager.CreateAsync(
            input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId
            );

            return ObjectMapper.Map<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplateDto>(transportationSetSupplierViewTemplate);
        }

        [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Edit)]
        public virtual async Task<TransportationSetSupplierViewTemplateDto> UpdateAsync(Guid id, TransportationSetSupplierViewTemplateUpdateDto input)
        {

            var transportationSetSupplierViewTemplate = await _transportationSetSupplierViewTemplateManager.UpdateAsync(
            id,
            input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId, input.ConcurrencyStamp
            );

            return ObjectMapper.Map<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplateDto>(transportationSetSupplierViewTemplate);
        }

        [AllowAnonymous]
        public virtual async Task<IRemoteStreamContent> GetListAsExcelFileAsync(TransportationSetSupplierViewTemplateExcelDownloadDto input)
        {
            var downloadToken = await _downloadTokenCache.GetAsync(input.DownloadToken);
            if (downloadToken == null || input.DownloadToken != downloadToken.Token)
            {
                throw new AbpAuthorizationException("Invalid download token: " + input.DownloadToken);
            }

            var items = await _transportationSetSupplierViewTemplateRepository.GetListAsync(input.FilterText, input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId);

            var memoryStream = new MemoryStream();
            await memoryStream.SaveAsAsync(ObjectMapper.Map<List<TransportationSetSupplierViewTemplate>, List<TransportationSetSupplierViewTemplateExcelDto>>(items));
            memoryStream.Seek(0, SeekOrigin.Begin);

            return new RemoteStreamContent(memoryStream, "TransportationSetSupplierViewTemplates.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Delete)]
        public virtual async Task DeleteByIdsAsync(List<Guid> transportationsetsupplierviewtemplateIds)
        {
            await _transportationSetSupplierViewTemplateRepository.DeleteManyAsync(transportationsetsupplierviewtemplateIds);
        }

        [Authorize(PortXPermissions.TransportationSetSupplierViewTemplates.Delete)]
        public virtual async Task DeleteAllAsync(GetTransportationSetSupplierViewTemplatesInput input)
        {
            await _transportationSetSupplierViewTemplateRepository.DeleteAllAsync(input.FilterText, input.SupplierTenantId, input.TransportationSetViewTemplateRootId, input.SupplierId, input.RootId, input.ShippingRootId);
        }
        public virtual async Task<PortX.Shared.DownloadTokenResultDto> GetDownloadTokenAsync()
        {
            var token = Guid.NewGuid().ToString("N");

            await _downloadTokenCache.SetAsync(
                token,
                new TransportationSetSupplierViewTemplateDownloadTokenCacheItem { Token = token },
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