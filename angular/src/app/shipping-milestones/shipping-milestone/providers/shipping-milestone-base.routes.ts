import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_MILESTONE_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-milestones',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingMilestones',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingMilestones',
    breadcrumbText: '::ShippingMilestones',
  },
];
