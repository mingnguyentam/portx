import { ABP, eLayoutType } from '@abp/ng.core';

export const COMBINED_LANE_ITEM_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/combined-lane-items',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:CombinedLaneItems',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.CombinedLaneItems',
    breadcrumbText: '::CombinedLaneItems',
  },
];
