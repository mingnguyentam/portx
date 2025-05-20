import type {
  GetShippingWorkflowDisplayItemsInput,
  ShippingWorkflowDisplayItemCreateDto,
  ShippingWorkflowDisplayItemDto,
  ShippingWorkflowDisplayItemExcelDownloadDto,
  ShippingWorkflowDisplayItemUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingWorkflowDisplayItemService {
  apiName = 'Default';

  create = (input: ShippingWorkflowDisplayItemCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingWorkflowDisplayItemDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-workflow-display-items',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-workflow-display-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingWorkflowDisplayItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-workflow-display-items/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          category: input.category,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingMilestoneStepRootId: input.shippingMilestoneStepRootId,
          transportationSetRootId: input.transportationSetRootId,
          transportationSetItemRootId: input.transportationSetItemRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingWorkflowDisplayItemIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-workflow-display-items',
        params: { shippingWorkflowDisplayItemIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingWorkflowDisplayItemDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-workflow-display-items/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-workflow-display-items/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-workflow-display-items/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingWorkflowDisplayItemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingWorkflowDisplayItemDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-workflow-display-items',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          category: input.category,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingMilestoneStepRootId: input.shippingMilestoneStepRootId,
          transportationSetRootId: input.transportationSetRootId,
          transportationSetItemRootId: input.transportationSetItemRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: ShippingWorkflowDisplayItemExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-workflow-display-items/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          category: input.category,
          attributes: input.attributes,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingMilestoneStepRootId: input.shippingMilestoneStepRootId,
          transportationSetRootId: input.transportationSetRootId,
          transportationSetItemRootId: input.transportationSetItemRootId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (
    id: string,
    input: ShippingWorkflowDisplayItemUpdateDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, ShippingWorkflowDisplayItemDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-workflow-display-items/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-workflow-display-items/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
