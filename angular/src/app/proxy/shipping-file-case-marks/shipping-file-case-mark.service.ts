import type {
  GetShippingFileCaseMarksInput,
  ShippingFileCaseMarkCreateDto,
  ShippingFileCaseMarkDto,
  ShippingFileCaseMarkExcelDownloadDto,
  ShippingFileCaseMarkUpdateDto,
  ShippingFileCaseMarkWithNavigationPropertiesDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type {
  AppFileDescriptorDto,
  DownloadTokenResultDto,
  GetFileInput,
  LookupDto,
  LookupRequestDto,
} from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingFileCaseMarkService {
  apiName = 'Default';

  create = (input: ShippingFileCaseMarkCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFileCaseMarkDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-file-case-marks',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-file-case-marks/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingFileCaseMarksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-file-case-marks/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          file: input.file,
          referenceTenantId: input.referenceTenantId,
          shippingInvoiceIds: input.shippingInvoiceIds,
          extraData: input.extraData,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          content: input.content,
          shippingId: input.shippingId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingFileCaseMarkIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-file-case-marks',
        params: { shippingFileCaseMarkIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFileCaseMarkDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-file-case-marks/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-file-case-marks/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-file-case-marks/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingFileCaseMarksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingFileCaseMarkWithNavigationPropertiesDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-file-case-marks',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          file: input.file,
          referenceTenantId: input.referenceTenantId,
          shippingInvoiceIds: input.shippingInvoiceIds,
          extraData: input.extraData,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          content: input.content,
          shippingId: input.shippingId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: ShippingFileCaseMarkExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-file-case-marks/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          file: input.file,
          referenceTenantId: input.referenceTenantId,
          shippingInvoiceIds: input.shippingInvoiceIds,
          extraData: input.extraData,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          content: input.content,
          shippingId: input.shippingId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getShippingLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>(
      {
        method: 'GET',
        url: '/api/app/shipping-file-case-marks/shipping-lookup',
        params: {
          filter: input.filter,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFileCaseMarkWithNavigationPropertiesDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-file-case-marks/with-navigation-properties/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ShippingFileCaseMarkUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingFileCaseMarkDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-file-case-marks/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-file-case-marks/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
