import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_HISTORY_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-histories',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingHistories',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingHistories',
    breadcrumbText: '::ShippingHistories',
  },
];
