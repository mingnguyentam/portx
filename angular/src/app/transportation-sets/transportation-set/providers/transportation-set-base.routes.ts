import { ABP, eLayoutType } from '@abp/ng.core';

export const TRANSPORTATION_SET_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/transportation-sets',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:TransportationSets',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.TransportationSets',
    breadcrumbText: '::TransportationSets',
  },
];
