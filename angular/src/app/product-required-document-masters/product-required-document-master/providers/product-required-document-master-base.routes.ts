import { ABP, eLayoutType } from '@abp/ng.core';

export const PRODUCT_REQUIRED_DOCUMENT_MASTER_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/product-required-document-masters',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ProductRequiredDocumentMasters',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ProductRequiredDocumentMasters',
    breadcrumbText: '::ProductRequiredDocumentMasters',
  },
];
