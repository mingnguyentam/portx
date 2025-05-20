import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_MILESTONE_STEP_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-milestone-steps',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingMilestoneSteps',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingMilestoneSteps',
    breadcrumbText: '::ShippingMilestoneSteps',
  },
];
