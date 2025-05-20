import type {
  GetShippingMilestoneStepsInput,
  ShippingMilestoneStepCreateDto,
  ShippingMilestoneStepDto,
  ShippingMilestoneStepExcelDownloadDto,
  ShippingMilestoneStepUpdateDto,
} from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AppFileDescriptorDto, DownloadTokenResultDto, GetFileInput } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ShippingMilestoneStepService {
  apiName = 'Default';

  create = (input: ShippingMilestoneStepCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingMilestoneStepDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-milestone-steps',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/shipping-milestone-steps/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  deleteAll = (input: GetShippingMilestoneStepsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-milestone-steps/all',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          type: input.type,
          category: input.category,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          businessTypeId: input.businessTypeId,
          supplierId: input.supplierId,
          supplierTeamId: input.supplierTeamId,
          isRequiredApproval: input.isRequiredApproval,
          approverId: input.approverId,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingWorkflowRootId: input.shippingWorkflowRootId,
          supplierTenantId: input.supplierTenantId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  deleteByIds = (shippingMilestoneStepIds: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: '/api/app/shipping-milestone-steps',
        params: { shippingMilestoneStepIds },
      },
      { apiName: this.apiName, ...config },
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingMilestoneStepDto>(
      {
        method: 'GET',
        url: `/api/app/shipping-milestone-steps/${id}`,
      },
      { apiName: this.apiName, ...config },
    );

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>(
      {
        method: 'GET',
        url: '/api/app/shipping-milestone-steps/download-token',
      },
      { apiName: this.apiName, ...config },
    );

  getFile = (input: GetFileInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-milestone-steps/file',
        params: { downloadToken: input.downloadToken, fileId: input.fileId },
      },
      { apiName: this.apiName, ...config },
    );

  getList = (input: GetShippingMilestoneStepsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ShippingMilestoneStepDto>>(
      {
        method: 'GET',
        url: '/api/app/shipping-milestone-steps',
        params: {
          filterText: input.filterText,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
          name: input.name,
          type: input.type,
          category: input.category,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          businessTypeId: input.businessTypeId,
          supplierId: input.supplierId,
          supplierTeamId: input.supplierTeamId,
          isRequiredApproval: input.isRequiredApproval,
          approverId: input.approverId,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingWorkflowRootId: input.shippingWorkflowRootId,
          supplierTenantId: input.supplierTenantId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  getListAsExcelFile = (
    input: ShippingMilestoneStepExcelDownloadDto,
    config?: Partial<Rest.Config>,
  ) =>
    this.restService.request<any, Blob>(
      {
        method: 'GET',
        responseType: 'blob',
        url: '/api/app/shipping-milestone-steps/as-excel-file',
        params: {
          downloadToken: input.downloadToken,
          filterText: input.filterText,
          name: input.name,
          type: input.type,
          category: input.category,
          orderMin: input.orderMin,
          orderMax: input.orderMax,
          businessTypeId: input.businessTypeId,
          supplierId: input.supplierId,
          supplierTeamId: input.supplierTeamId,
          isRequiredApproval: input.isRequiredApproval,
          approverId: input.approverId,
          rootId: input.rootId,
          shippingMilestoneRootId: input.shippingMilestoneRootId,
          shippingWorkflowRootId: input.shippingWorkflowRootId,
          supplierTenantId: input.supplierTenantId,
        },
      },
      { apiName: this.apiName, ...config },
    );

  update = (id: string, input: ShippingMilestoneStepUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ShippingMilestoneStepDto>(
      {
        method: 'PUT',
        url: `/api/app/shipping-milestone-steps/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  uploadFile = (input: FormData, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AppFileDescriptorDto>(
      {
        method: 'POST',
        url: '/api/app/shipping-milestone-steps/upload-file',
        body: input,
      },
      { apiName: this.apiName, ...config },
    );

  constructor(private restService: RestService) {}
}
