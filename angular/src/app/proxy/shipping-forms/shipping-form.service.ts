import type {
  GetShippingFormsInput,
  ShippingFormCreateDto,
  ShippingFormDto,
  ShippingFormExcelDownloadDto,
  ShippingFormUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingFormService {
  apiName = 'Default';

  create = (input: ShippingFormCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFormDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-forms',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-forms/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingFormsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-forms/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          file: input.file,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingFormIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-forms',
        params: { shippingFormIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFormDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-forms/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-forms/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-forms/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingFormsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingFormDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-forms',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          file: input.file,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: ShippingFormExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-forms/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          file: input.file,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ShippingFormUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFormDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-forms/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-forms/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
