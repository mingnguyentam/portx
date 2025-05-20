import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_WORKFLOW_DISPLAY_ITEM_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-workflow-display-items',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingWorkflowDisplayItems',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingWorkflowDisplayItems',
    breadcrumbText: '::ShippingWorkflowDisplayItems',
  },
];
