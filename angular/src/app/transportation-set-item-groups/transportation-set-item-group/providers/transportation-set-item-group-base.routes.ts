import { ABP, eLayoutType } from '@abp/ng.core';

export const TRANSPORTATION_SET_ITEM_GROUP_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/transportation-set-item-groups',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:TransportationSetItemGroups',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.TransportationSetItemGroups',
    breadcrumbText: '::TransportationSetItemGroups',
  },
];
