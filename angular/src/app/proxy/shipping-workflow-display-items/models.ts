import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingWorkflowDisplayItemsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  category?: string;
  attributes?: string;
  orderMin?: number;
  orderMax?: number;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingMilestoneStepRootId?: string;
  transportationSetRootId?: string;
  transportationSetItemRootId?: string;
}

export interface ShippingWorkflowDisplayItemCreateDto {
  category?: string;
  attributes?: string;
  order: number;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingMilestoneStepRootId?: string;
  transportationSetRootId?: string;
  transportationSetItemRootId?: string;
}

export interface ShippingWorkflowDisplayItemDto extends FullAuditedEntityDto<string> {
  category?: string;
  attributes?: string;
  order: number;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingMilestoneStepRootId?: string;
  transportationSetRootId?: string;
  transportationSetItemRootId?: string;
  concurrencyStamp?: string;
}

export interface ShippingWorkflowDisplayItemExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  category?: string;
  attributes?: string;
  orderMin?: number;
  orderMax?: number;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingMilestoneStepRootId?: string;
  transportationSetRootId?: string;
  transportationSetItemRootId?: string;
}

export interface ShippingWorkflowDisplayItemUpdateDto {
  category?: string;
  attributes?: string;
  order: number;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingMilestoneStepRootId?: string;
  transportationSetRootId?: string;
  transportationSetItemRootId?: string;
  concurrencyStamp?: string;
}
