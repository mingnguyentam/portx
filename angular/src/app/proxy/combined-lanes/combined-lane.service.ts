import type {
  CombinedLaneCreateDto,
  CombinedLaneDto,
  CombinedLaneExcelDownloadDto,
  CombinedLaneUpdateDto,
  GetCombinedLanesInput,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class CombinedLaneService {
  apiName = 'Default';

  create = (input: CombinedLaneCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneDto>(
      {
        method: 'POST',
        url: '/api/app/combined-lanes',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/combined-lanes/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetCombinedLanesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/combined-lanes/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          combinedLaneId: input.combinedLaneId,
          name: input.name,
          originLaneId: input.originLaneId,
          destinationLaneId: input.destinationLaneId,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (combinedLaneIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/combined-lanes',
        params: { combinedLaneIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneDto>(
      {
        method: 'GET',
        url: `/api/app/combined-lanes/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/combined-lanes/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/combined-lanes/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetCombinedLanesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CombinedLaneDto>>(
      {
        method: 'GET',
        url: '/api/app/combined-lanes',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          combinedLaneId: input.combinedLaneId,
          name: input.name,
          originLaneId: input.originLaneId,
          destinationLaneId: input.destinationLaneId,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: CombinedLaneExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/combined-lanes/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          combinedLaneId: input.combinedLaneId,
          name: input.name,
          originLaneId: input.originLaneId,
          destinationLaneId: input.destinationLaneId,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: CombinedLaneUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CombinedLaneDto>(
      {
        method: 'PUT',
        url: `/api/app/combined-lanes/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/combined-lanes/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
