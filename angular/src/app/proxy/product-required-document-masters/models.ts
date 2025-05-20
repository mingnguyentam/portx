import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetProductRequiredDocumentMastersInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  productId?: string;
  requiredDocumentId?: string;
}

export interface ProductRequiredDocumentMasterCreateDto {
  productId?: string;
  requiredDocumentId?: string;
}

export interface ProductRequiredDocumentMasterDto extends FullAuditedEntityDto<string> {
  productId?: string;
  requiredDocumentId?: string;
  concurrencyStamp?: string;
}

export interface ProductRequiredDocumentMasterExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  productId?: string;
  requiredDocumentId?: string;
}

export interface ProductRequiredDocumentMasterUpdateDto {
  productId?: string;
  requiredDocumentId?: string;
  concurrencyStamp?: string;
}

export interface ProductRequiredDocumentMasterWithNavigationPropertiesDto {
  productRequiredDocumentMaster: ProductRequiredDocumentMasterDto;
  product: ProductDto;
  requiredDocument: RequiredDocumentDto;
}
