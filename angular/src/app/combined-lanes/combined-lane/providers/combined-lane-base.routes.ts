import { ABP, eLayoutType } from '@abp/ng.core';

export const COMBINED_LANE_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/combined-lanes',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:CombinedLanes',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.CombinedLanes',
    breadcrumbText: '::CombinedLanes',
  },
];
