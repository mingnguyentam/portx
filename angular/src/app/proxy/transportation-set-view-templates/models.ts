import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTransportationSetViewTemplatesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  description?: string;
  data?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetViewTemplateCreateDto {
  name?: string;
  description?: string;
  data?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetViewTemplateDto extends FullAuditedEntityDto<string> {
  name?: string;
  description?: string;
  data?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}

export interface TransportationSetViewTemplateExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  name?: string;
  description?: string;
  data?: string;
  rootId?: string;
  transportationSetRootId?: string;
}

export interface TransportationSetViewTemplateUpdateDto {
  name?: string;
  description?: string;
  data?: string;
  rootId?: string;
  transportationSetRootId?: string;
  concurrencyStamp?: string;
}
