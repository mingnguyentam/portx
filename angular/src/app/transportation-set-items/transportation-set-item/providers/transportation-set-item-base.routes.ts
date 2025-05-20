import { ABP, eLayoutType } from '@abp/ng.core';

export const TRANSPORTATION_SET_ITEM_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/transportation-set-items',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:TransportationSetItems',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.TransportationSetItems',
    breadcrumbText: '::TransportationSetItems',
  },
];
