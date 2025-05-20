import type {
  GetShippingHistoriesInput,
  ShippingHistoryCreateDto,
  ShippingHistoryDto,
  ShippingHistoryExcelDownloadDto,
  ShippingHistoryUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingHistoryService {
  apiName = 'Default';

  create = (input: ShippingHistoryCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingHistoryDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-histories',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-histories/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingHistoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-histories/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          creatorName: input.creatorName,
          creatorEmail: input.creatorEmail,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          data: input.data,
          extraData: input.extraData,
          shippingRootId: input.shippingRootId,
          isCreatedByOwner: input.isCreatedByOwner,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingHistoryIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-histories',
        params: { shippingHistoryIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingHistoryDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-histories/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-histories/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-histories/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingHistoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingHistoryDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-histories',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          creatorName: input.creatorName,
          creatorEmail: input.creatorEmail,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          data: input.data,
          extraData: input.extraData,
          shippingRootId: input.shippingRootId,
          isCreatedByOwner: input.isCreatedByOwner,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: ShippingHistoryExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-histories/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          creatorName: input.creatorName,
          creatorEmail: input.creatorEmail,
          typeMin: input.typeMin,
          typeMax: input.typeMax,
          data: input.data,
          extraData: input.extraData,
          shippingRootId: input.shippingRootId,
          isCreatedByOwner: input.isCreatedByOwner,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ShippingHistoryUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingHistoryDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-histories/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-histories/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
