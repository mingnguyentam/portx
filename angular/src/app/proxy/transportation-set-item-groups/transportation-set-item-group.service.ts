import type {
  GetTransportationSetItemGroupsInput,
  TransportationSetItemGroupCreateDto,
  TransportationSetItemGroupDto,
  TransportationSetItemGroupExcelDownloadDto,
  TransportationSetItemGroupUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransportationSetItemGroupService {
  apiName = 'Default';

  create = (input: TransportationSetItemGroupCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetItemGroupDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-item-groups',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/transportation-set-item-groups/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetTransportationSetItemGroupsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-item-groups/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          type: input.type,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (transportationSetItemGroupIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-item-groups',
        params: { transportationSetItemGroupIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetItemGroupDto>(
      {
        method: 'GET',
        url: `/api/app/transportation-set-item-groups/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-item-groups/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-item-groups/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetTransportationSetItemGroupsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TransportationSetItemGroupDto>>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-item-groups',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          type: input.type,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: TransportationSetItemGroupExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-item-groups/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          type: input.type,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (
    id: string,
    input: TransportationSetItemGroupUpdateDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, TransportationSetItemGroupDto>(
      {
        method: 'PUT',
        url: `/api/app/transportation-set-item-groups/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-item-groups/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
