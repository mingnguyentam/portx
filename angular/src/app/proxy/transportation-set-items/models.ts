import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTransportationSetItemsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  type?: string;
  attributes?: string;
  orderMin?: number;
  orderMax?: number;
  category?: string;
  isActive?: boolean;
  isDefault?: boolean;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemCreateDto {
  name?: string;
  type?: string;
  attributes?: string;
  order: number;
  category?: string;
  isActive: boolean;
  isDefault: boolean;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemDto extends FullAuditedEntityDto<string> {
  name?: string;
  type?: string;
  attributes?: string;
  order: number;
  category?: string;
  isActive: boolean;
  isDefault: boolean;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}

export interface TransportationSetItemExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  type?: string;
  attributes?: string;
  orderMin?: number;
  orderMax?: number;
  category?: string;
  isActive?: boolean;
  isDefault?: boolean;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemUpdateDto {
  name?: string;
  type?: string;
  attributes?: string;
  order: number;
  category?: string;
  isActive: boolean;
  isDefault: boolean;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}
