import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTransportationSetsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive?: boolean;
  rootId?: string;
}

export interface TransportationSetCreateDto {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  rootId?: string;
}

export interface TransportationSetDto extends FullAuditedEntityDto<string> {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  rootId?: string;
  concurrencyStamp?: string;
}

export interface TransportationSetExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive?: boolean;
  rootId?: string;
}

export interface TransportationSetUpdateDto {
  name?: string;
  transportationType?: string;
  mode?: string;
  incoterms?: string;
  isActive: boolean;
  rootId?: string;
  concurrencyStamp?: string;
}
