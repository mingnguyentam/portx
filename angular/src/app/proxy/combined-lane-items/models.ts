import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { CombinedLaneDto } from '../combined-lanes/models';

export interface CombinedLaneItemCreateDto {
  order: number;
  combinedLaneId?: string;
  laneId?: string;
}

export interface CombinedLaneItemDto extends FullAuditedEntityDto<string> {
  order: number;
  combinedLaneId?: string;
  laneId?: string;
  concurrencyStamp?: string;
}

export interface CombinedLaneItemExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  orderMin?: number;
  orderMax?: number;
  combinedLaneId?: string;
  laneId?: string;
}

export interface CombinedLaneItemUpdateDto {
  order: number;
  combinedLaneId?: string;
  laneId?: string;
  concurrencyStamp?: string;
}

export interface CombinedLaneItemWithNavigationPropertiesDto {
  combinedLaneItem: CombinedLaneItemDto;
  combinedLane: CombinedLaneDto;
  lane: LaneDto;
}

export interface GetCombinedLaneItemsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  orderMin?: number;
  orderMax?: number;
  combinedLaneId?: string;
  laneId?: string;
}
