import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CombinedLaneCreateDto {
  combinedLaneId?: string;
  name?: string;
  originLaneId?: string;
  destinationLaneId?: string;
  isActive: boolean;
}

export interface CombinedLaneDto extends FullAuditedEntityDto<string> {
  combinedLaneId?: string;
  name?: string;
  originLaneId?: string;
  destinationLaneId?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}

export interface CombinedLaneExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  combinedLaneId?: string;
  name?: string;
  originLaneId?: string;
  destinationLaneId?: string;
  isActive?: boolean;
}

export interface CombinedLaneUpdateDto {
  combinedLaneId?: string;
  name?: string;
  originLaneId?: string;
  destinationLaneId?: string;
  isActive: boolean;
  concurrencyStamp?: string;
}

export interface GetCombinedLanesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  combinedLaneId?: string;
  name?: string;
  originLaneId?: string;
  destinationLaneId?: string;
  isActive?: boolean;
}
