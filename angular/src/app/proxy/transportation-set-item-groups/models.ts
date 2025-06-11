import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTransportationSetItemGroupsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  orderMin?: number;
  orderMax?: number;
  type?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemGroupCreateDto {
  name?: string;
  order?: number;
  type?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemGroupDto extends FullAuditedEntityDto<string> {
  name?: string;
  order?: number;
  type?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}

export interface TransportationSetItemGroupExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  orderMin?: number;
  orderMax?: number;
  type?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetItemGroupUpdateDto {
  name?: string;
  order?: number;
  type?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}
