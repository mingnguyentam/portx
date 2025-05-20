import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingMilestonesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  orderMin?: number;
  orderMax?: number;
  type?: string;
  rootId?: string;
  shippingWorkflowRootId?: string;
}

export interface ShippingMilestoneCreateDto {
  name?: string;
  order: number;
  type?: string;
  rootId?: string;
  shippingWorkflowRootId?: string;
}

export interface ShippingMilestoneDto extends FullAuditedEntityDto<string> {
  name?: string;
  order: number;
  type?: string;
  rootId?: string;
  shippingWorkflowRootId?: string;
  concurrencyStamp?: string;
}

export interface ShippingMilestoneExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  orderMin?: number;
  orderMax?: number;
  type?: string;
  rootId?: string;
  shippingWorkflowRootId?: string;
}

export interface ShippingMilestoneUpdateDto {
  name?: string;
  order: number;
  type?: string;
  rootId?: string;
  shippingWorkflowRootId?: string;
  concurrencyStamp?: string;
}
