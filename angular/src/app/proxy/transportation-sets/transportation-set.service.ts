import type {
  GetTransportationSetsInput,
  TransportationSetCreateDto,
  TransportationSetDto,
  TransportationSetExcelDownloadDto,
  TransportationSetUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransportationSetService {
  apiName = 'Default';

  create = (input: TransportationSetCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-sets',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/transportation-sets/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetTransportationSetsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-sets/all',
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
          rootId: input.rootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (transportationSetIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-sets',
        params: { transportationSetIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetDto>(
      {
        method: 'GET',
        url: `/api/app/transportation-sets/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/transportation-sets/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-sets/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetTransportationSetsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TransportationSetDto>>(
      {
        method: 'GET',
        url: '/api/app/transportation-sets',
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
          rootId: input.rootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: TransportationSetExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-sets/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          transportationType: input.transportationType,
          mode: input.mode,
          incoterms: input.incoterms,
          isActive: input.isActive,
          rootId: input.rootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: TransportationSetUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetDto>(
      {
        method: 'PUT',
        url: `/api/app/transportation-sets/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-sets/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
