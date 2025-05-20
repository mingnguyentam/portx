import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingWorkflowsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive?: boolean;
  conditionSettings?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface ShippingWorkflowCreateDto {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  conditionSettings?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface ShippingWorkflowDto extends FullAuditedEntityDto<string> {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  conditionSettings?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}

export interface ShippingWorkflowExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive?: boolean;
  conditionSettings?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface ShippingWorkflowUpdateDto {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  conditionSettings?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}
