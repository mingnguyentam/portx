import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_FILE_CASE_MARK_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-file-case-marks',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingFileCaseMarks',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingFileCaseMarks',
    breadcrumbText: '::ShippingFileCaseMarks',
  },
];
