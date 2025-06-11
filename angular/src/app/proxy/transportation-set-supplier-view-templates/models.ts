import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTransportationSetSupplierViewTemplatesInput
  extends PagedAndSortedResultRequestDto {
  filterText?: string;
  supplierTenantId?: string;
  transportationSetViewTemplateRootId?: string;
  supplierId?: string;
  rootId?: string;
  shippingRootId?: string;
}

export interface TransportationSetSupplierViewTemplateCreateDto {
  supplierTenantId?: string;
  transportationSetViewTemplateRootId?: string;
  supplierId?: string;
  rootId?: string;
  shippingRootId?: string;
}

export interface TransportationSetSupplierViewTemplateDto extends FullAuditedEntityDto<string> {
  supplierTenantId?: string;
  transportationSetViewTemplateRootId?: string;
  supplierId?: string;
  rootId?: string;
  shippingRootId?: string;
  concurrencyStamp?: string;
}

export interface TransportationSetSupplierViewTemplateExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  supplierTenantId?: string;
  transportationSetViewTemplateRootId?: string;
  supplierId?: string;
  rootId?: string;
  shippingRootId?: string;
}

export interface TransportationSetSupplierViewTemplateUpdateDto {
  supplierTenantId?: string;
  transportationSetViewTemplateRootId?: string;
  supplierId?: string;
  rootId?: string;
  shippingRootId?: string;
  concurrencyStamp?: string;
}
