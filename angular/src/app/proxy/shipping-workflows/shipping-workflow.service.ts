import type {
  GetShippingWorkflowsInput,
  ShippingWorkflowCreateDto,
  ShippingWorkflowDto,
  ShippingWorkflowExcelDownloadDto,
  ShippingWorkflowUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingWorkflowService {
  apiName = 'Default';

  create = (input: ShippingWorkflowCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingWorkflowDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-workflows',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-workflows/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingWorkflowsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-workflows/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          transportationType: input.transportationType,
          mode: input.mode,
          incoterms: input.incoterms,
          isActive: input.isActive,
          conditionSettings: input.conditionSettings,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingWorkflowIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-workflows',
        params: { shippingWorkflowIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingWorkflowDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-workflows/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-workflows/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-workflows/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingWorkflowsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingWorkflowDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-workflows',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          transportationType: input.transportationType,
          mode: input.mode,
          incoterms: input.incoterms,
          isActive: input.isActive,
          conditionSettings: input.conditionSettings,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: ShippingWorkflowExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-workflows/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          transportationType: input.transportationType,
          mode: input.mode,
          incoterms: input.incoterms,
          isActive: input.isActive,
          conditionSettings: input.conditionSettings,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ShippingWorkflowUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingWorkflowDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-workflows/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-workflows/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
