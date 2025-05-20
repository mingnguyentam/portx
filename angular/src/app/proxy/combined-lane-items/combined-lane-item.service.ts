import type {
  CombinedLaneItemCreateDto,
  CombinedLaneItemDto,
  CombinedLaneItemExcelDownloadDto,
  CombinedLaneItemUpdateDto,
  CombinedLaneItemWithNavigationPropertiesDto,
  GetCombinedLaneItemsInput,
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
export class CombinedLaneItemService {
  apiName = 'Default';

  create = (input: CombinedLaneItemCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneItemDto>(
      {
        method: 'POST',
        url: '/api/app/combined-lane-items',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/combined-lane-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetCombinedLaneItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/combined-lane-items/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          combinedLaneId: input.combinedLaneId,
          laneId: input.laneId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (combinedLaneItemIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/combined-lane-items',
        params: { combinedLaneItemIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneItemDto>(
      {
        method: 'GET',
        url: `/api/app/combined-lane-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getCombinedLaneLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>(
      {
        method: 'GET',
        url: '/api/app/combined-lane-items/combined-lane-lookup',
        params: {
          filter: input.filter,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/combined-lane-items/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/combined-lane-items/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getLaneLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>(
      {
        method: 'GET',
        url: '/api/app/combined-lane-items/lane-lookup',
        params: {
          filter: input.filter,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetCombinedLaneItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CombinedLaneItemWithNavigationPropertiesDto>>(
      {
        method: 'GET',
        url: '/api/app/combined-lane-items',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          combinedLaneId: input.combinedLaneId,
          laneId: input.laneId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: CombinedLaneItemExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/combined-lane-items/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          combinedLaneId: input.combinedLaneId,
          laneId: input.laneId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneItemWithNavigationPropertiesDto>(
      {
        method: 'GET',
        url: `/api/app/combined-lane-items/with-navigation-properties/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: CombinedLaneItemUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneItemDto>(
      {
        method: 'PUT',
        url: `/api/app/combined-lane-items/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/combined-lane-items/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
