import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_WORKFLOW_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-workflows',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingWorkflows',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingWorkflows',
    breadcrumbText: '::ShippingWorkflows',
  },
];
