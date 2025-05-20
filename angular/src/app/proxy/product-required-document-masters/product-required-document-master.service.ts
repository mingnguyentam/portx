import type {
  GetProductRequiredDocumentMastersInput,
  ProductRequiredDocumentMasterCreateDto,
  ProductRequiredDocumentMasterDto,
  ProductRequiredDocumentMasterExcelDownloadDto,
  ProductRequiredDocumentMasterUpdateDto,
  ProductRequiredDocumentMasterWithNavigationPropertiesDto,
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
export class ProductRequiredDocumentMasterService {
  apiName = 'Default';

  create = (input: ProductRequiredDocumentMasterCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductRequiredDocumentMasterDto>(
      {
        method: 'POST',
        url: '/api/app/product-required-document-masters',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/product-required-document-masters/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetProductRequiredDocumentMastersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/product-required-document-masters/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          productId: input.productId,
          requiredDocumentId: input.requiredDocumentId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (productRequiredDocumentMasterIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/product-required-document-masters',
        params: { productRequiredDocumentMasterIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductRequiredDocumentMasterDto>(
      {
        method: 'GET',
        url: `/api/app/product-required-document-masters/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/product-required-document-masters/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/product-required-document-masters/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetProductRequiredDocumentMastersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<
      any,
      PagedResultDto<ProductRequiredDocumentMasterWithNavigationPropertiesDto>
    >(
      {
        method: 'GET',
        url: '/api/app/product-required-document-masters',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          productId: input.productId,
          requiredDocumentId: input.requiredDocumentId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: ProductRequiredDocumentMasterExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/product-required-document-masters/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          productId: input.productId,
          requiredDocumentId: input.requiredDocumentId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getProductLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>(
      {
        method: 'GET',
        url: '/api/app/product-required-document-masters/product-lookup',
        params: {
          filter: input.filter,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getRequiredDocumentLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>(
      {
        method: 'GET',
        url: '/api/app/product-required-document-masters/required-document-lookup',
        params: {
          filter: input.filter,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductRequiredDocumentMasterWithNavigationPropertiesDto>(
      {
        method: 'GET',
        url: `/api/app/product-required-document-masters/with-navigation-properties/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  update = (
    id: string,
    input: ProductRequiredDocumentMasterUpdateDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, ProductRequiredDocumentMasterDto>(
      {
        method: 'PUT',
        url: `/api/app/product-required-document-masters/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/product-required-document-masters/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
