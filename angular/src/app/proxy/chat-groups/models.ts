import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ChatGroupCreateDto {
  name?: string;
  description?: string;
  isActive: boolean;
  providerName?: string;
  providerKey?: string;
}

export interface ChatGroupDto extends FullAuditedEntityDto<string> {
  name?: string;
  description?: string;
  isActive: boolean;
  providerName?: string;
  providerKey?: string;
  concurrencyStamp?: string;
}

export interface ChatGroupExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  providerName?: string;
  providerKey?: string;
}

export interface ChatGroupUpdateDto {
  name?: string;
  description?: string;
  isActive: boolean;
  providerName?: string;
  providerKey?: string;
  concurrencyStamp?: string;
}

export interface GetChatGroupsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  providerName?: string;
  providerKey?: string;
}
