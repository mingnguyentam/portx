import type {
  GetTransportationSetSupplierViewTemplatesInput,
  TransportationSetSupplierViewTemplateCreateDto,
  TransportationSetSupplierViewTemplateDto,
  TransportationSetSupplierViewTemplateExcelDownloadDto,
  TransportationSetSupplierViewTemplateUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransportationSetSupplierViewTemplateService {
  apiName = 'Default';

  create = (input: TransportationSetSupplierViewTemplateCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetSupplierViewTemplateDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-supplier-view-templates',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/transportation-set-supplier-view-templates/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (
    input: GetTransportationSetSupplierViewTemplatesInput,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-supplier-view-templates/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          supplierTenantId: input.supplierTenantId,
          transportationSetViewTemplateRootId: input.transportationSetViewTemplateRootId,
          supplierId: input.supplierId,
          rootId: input.rootId,
          shippingRootId: input.shippingRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (
    transportationSetSupplierViewTemplateIds: string[],
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-supplier-view-templates',
        params: { transportationSetSupplierViewTemplateIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetSupplierViewTemplateDto>(
      {
        method: 'GET',
        url: `/api/app/transportation-set-supplier-view-templates/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-supplier-view-templates/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-supplier-view-templates/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (
    input: GetTransportationSetSupplierViewTemplatesInput,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, PagedResultDto<TransportationSetSupplierViewTemplateDto>>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-supplier-view-templates',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          supplierTenantId: input.supplierTenantId,
          transportationSetViewTemplateRootId: input.transportationSetViewTemplateRootId,
          supplierId: input.supplierId,
          rootId: input.rootId,
          shippingRootId: input.shippingRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: TransportationSetSupplierViewTemplateExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-supplier-view-templates/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          supplierTenantId: input.supplierTenantId,
          transportationSetViewTemplateRootId: input.transportationSetViewTemplateRootId,
          supplierId: input.supplierId,
          rootId: input.rootId,
          shippingRootId: input.shippingRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (
    id: string,
    input: TransportationSetSupplierViewTemplateUpdateDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, TransportationSetSupplierViewTemplateDto>(
      {
        method: 'PUT',
        url: `/api/app/transportation-set-supplier-view-templates/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-supplier-view-templates/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
