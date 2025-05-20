import { ABP, eLayoutType } from '@abp/ng.core';

export const LOCATION_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/locations',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:Locations',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.Locations',
    breadcrumbText: '::Locations',
  },
];
