import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingFormsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  typeMin?: number;
  typeMax?: number;
  file?: string;
  isActive?: boolean;
}

export interface ShippingFormCreateDto {
  name?: string;
  type: number;
  file?: string;
  isActive: boolean;
}

export interface ShippingFormDto extends FullAuditedEntityDto<string> {
  name?: string;
  type: number;
  file?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}

export interface ShippingFormExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  typeMin?: number;
  typeMax?: number;
  file?: string;
  isActive?: boolean;
}

export interface ShippingFormUpdateDto {
  name?: string;
  type: number;
  file?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}
