import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingFileCaseMarksInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  file?: string;
  referenceTenantId?: string;
  shippingInvoiceIds?: string;
  extraData?: string;
  typeMin?: number;
  typeMax?: number;
  content?: string;
  shippingId?: string;
}

export interface ShippingFileCaseMarkCreateDto {
  file?: string;
  referenceTenantId?: string;
  shippingInvoiceIds?: string;
  extraData?: string;
  type: number;
  content?: string;
  shippingId?: string;
}

export interface ShippingFileCaseMarkDto extends FullAuditedEntityDto<string> {
  file?: string;
  referenceTenantId?: string;
  shippingInvoiceIds?: string;
  extraData?: string;
  type: number;
  content?: string;
  shippingId?: string;
  concurrencyStamp?: string;
}

export interface ShippingFileCaseMarkExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  file?: string;
  referenceTenantId?: string;
  shippingInvoiceIds?: string;
  extraData?: string;
  typeMin?: number;
  typeMax?: number;
  content?: string;
  shippingId?: string;
}

export interface ShippingFileCaseMarkUpdateDto {
  file?: string;
  referenceTenantId?: string;
  shippingInvoiceIds?: string;
  extraData?: string;
  type: number;
  content?: string;
  shippingId?: string;
  concurrencyStamp?: string;
}

export interface ShippingFileCaseMarkWithNavigationPropertiesDto {
  shippingFileCaseMark: ShippingFileCaseMarkDto;
  shipping: ShippingDto;
}
