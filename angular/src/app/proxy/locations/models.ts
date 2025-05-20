import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetLocationsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  code?: string;
  type?: string;
  name?: string;
  countryCode?: string;
  isActive?: boolean;
}

export interface LocationCreateDto {
  code?: string;
  type?: string;
  name?: string;
  countryCode?: string;
  isActive: boolean;
}

export interface LocationDto extends FullAuditedEntityDto<string> {
  code?: string;
  type?: string;
  name?: string;
  countryCode?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}

export interface LocationExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  code?: string;
  type?: string;
  name?: string;
  countryCode?: string;
  isActive?: boolean;
}

export interface LocationUpdateDto {
  code?: string;
  type?: string;
  name?: string;
  countryCode?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}
