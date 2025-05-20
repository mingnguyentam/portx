import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetShippingHistoriesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  creatorName?: string;
  creatorEmail?: string;
  typeMin?: number;
  typeMax?: number;
  data?: string;
  extraData?: string;
  shippingRootId?: string;
  isCreatedByOwner?: boolean;
}

export interface ShippingHistoryCreateDto {
  creatorName?: string;
  creatorEmail?: string;
  type?: number;
  data?: string;
  extraData?: string;
  shippingRootId?: string;
  isCreatedByOwner: boolean;
}

export interface ShippingHistoryDto extends FullAuditedEntityDto<string> {
  creatorName?: string;
  creatorEmail?: string;
  type?: number;
  data?: string;
  extraData?: string;
  shippingRootId?: string;
  isCreatedByOwner: boolean;
  concurrencyStamp?: string;
}

export interface ShippingHistoryExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  creatorName?: string;
  creatorEmail?: string;
  typeMin?: number;
  typeMax?: number;
  data?: string;
  extraData?: string;
  shippingRootId?: string;
  isCreatedByOwner?: boolean;
}

export interface ShippingHistoryUpdateDto {
  creatorName?: string;
  creatorEmail?: string;
  type?: number;
  data?: string;
  extraData?: string;
  shippingRootId?: string;
  isCreatedByOwner: boolean;
  concurrencyStamp?: string;
}
