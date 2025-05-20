import type {
  GetTransportationSetItemsInput,
  TransportationSetItemCreateDto,
  TransportationSetItemDto,
  TransportationSetItemExcelDownloadDto,
  TransportationSetItemUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransportationSetItemService {
  apiName = 'Default';

  create = (input: TransportationSetItemCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetItemDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-items',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/transportation-set-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetTransportationSetItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-items/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          type: input.type,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          category: input.category,
          isActive: input.isActive,
          isDefault: input.isDefault,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (transportationSetItemIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-items',
        params: { transportationSetItemIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetItemDto>(
      {
        method: 'GET',
        url: `/api/app/transportation-set-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-items/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-items/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetTransportationSetItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TransportationSetItemDto>>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-items',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          type: input.type,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          category: input.category,
          isActive: input.isActive,
          isDefault: input.isDefault,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: TransportationSetItemExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-items/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          type: input.type,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          category: input.category,
          isActive: input.isActive,
          isDefault: input.isDefault,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: TransportationSetItemUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetItemDto>(
      {
        method: 'PUT',
        url: `/api/app/transportation-set-items/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-items/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
