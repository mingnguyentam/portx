import type {
  GetTransportationSetViewTemplatesInput,
  TransportationSetViewTemplateCreateDto,
  TransportationSetViewTemplateDto,
  TransportationSetViewTemplateExcelDownloadDto,
  TransportationSetViewTemplateUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransportationSetViewTemplateService {
  apiName = 'Default';

  create = (input: TransportationSetViewTemplateCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetViewTemplateDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-view-templates',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/transportation-set-view-templates/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetTransportationSetViewTemplatesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-view-templates/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          description: input.description,
          data: input.data,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (transportationSetViewTemplateIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/transportation-set-view-templates',
        params: { transportationSetViewTemplateIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TransportationSetViewTemplateDto>(
      {
        method: 'GET',
        url: `/api/app/transportation-set-view-templates/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-view-templates/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-view-templates/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetTransportationSetViewTemplatesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TransportationSetViewTemplateDto>>(
      {
        method: 'GET',
        url: '/api/app/transportation-set-view-templates',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          description: input.description,
          data: input.data,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: TransportationSetViewTemplateExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/transportation-set-view-templates/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          description: input.description,
          data: input.data,
          rootId: input.rootId,
          transportationSetRootId: input.transportationSetRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (
    id: string,
    input: TransportationSetViewTemplateUpdateDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, TransportationSetViewTemplateDto>(
      {
        method: 'PUT',
        url: `/api/app/transportation-set-view-templates/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/transportation-set-view-templates/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
