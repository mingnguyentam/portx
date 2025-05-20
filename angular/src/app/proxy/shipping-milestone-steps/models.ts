import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingMilestoneStepsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  type?: string;
  category?: string;
  orderMin?: number;
  orderMax?: number;
  businessTypeId?: string;
  supplierId?: string;
  supplierTeamId?: string;
  isRequiredApproval?: boolean;
  approverId?: string;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingWorkflowRootId?: string;
  supplierTenantId?: string;
}

export interface ShippingMilestoneStepCreateDto {
  name?: string;
  type?: string;
  category?: string;
  order: number;
  businessTypeId?: string;
  supplierId?: string;
  supplierTeamId?: string;
  isRequiredApproval: boolean;
  approverId?: string;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingWorkflowRootId?: string;
  supplierTenantId?: string;
}

export interface ShippingMilestoneStepDto extends FullAuditedEntityDto<string> {
  name?: string;
  type?: string;
  category?: string;
  order: number;
  businessTypeId?: string;
  supplierId?: string;
  supplierTeamId?: string;
  isRequiredApproval: boolean;
  approverId?: string;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingWorkflowRootId?: string;
  supplierTenantId?: string;
  concurrencyStamp?: string;
}

export interface ShippingMilestoneStepExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  type?: string;
  category?: string;
  orderMin?: number;
  orderMax?: number;
  businessTypeId?: string;
  supplierId?: string;
  supplierTeamId?: string;
  isRequiredApproval?: boolean;
  approverId?: string;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingWorkflowRootId?: string;
  supplierTenantId?: string;
}

export interface ShippingMilestoneStepUpdateDto {
  name?: string;
  type?: string;
  category?: string;
  order: number;
  businessTypeId?: string;
  supplierId?: string;
  supplierTeamId?: string;
  isRequiredApproval: boolean;
  approverId?: string;
  rootId?: string;
  shippingMilestoneRootId?: string;
  shippingWorkflowRootId?: string;
  supplierTenantId?: string;
  concurrencyStamp?: string;
}
