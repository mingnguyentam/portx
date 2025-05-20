import type {
  GetLocationsInput,
  LocationCreateDto,
  LocationDto,
  LocationExcelDownloadDto,
  LocationUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  apiName = 'Default';

  create = (input: LocationCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>(
      {
        method: 'POST',
        url: '/api/app/locations',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/locations/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetLocationsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/locations/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          code: input.code,
          type: input.type,
          name: input.name,
          countryCode: input.countryCode,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (locationIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/locations',
        params: { locationIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>(
      {
        method: 'GET',
        url: `/api/app/locations/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/locations/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/locations/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetLocationsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LocationDto>>(
      {
        method: 'GET',
        url: '/api/app/locations',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          code: input.code,
          type: input.type,
          name: input.name,
          countryCode: input.countryCode,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (input: LocationExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/locations/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          code: input.code,
          type: input.type,
          name: input.name,
          countryCode: input.countryCode,
          isActive: input.isActive,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: LocationUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LocationDto>(
      {
        method: 'PUT',
        url: `/api/app/locations/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/locations/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
