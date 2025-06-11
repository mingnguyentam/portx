import { ABP, eLayoutType } from '@abp/ng.core';

export const TRANSPORTATION_SET_VIEW_TEMPLATE_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/transportation-set-view-templates',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:TransportationSetViewTemplates',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.TransportationSetViewTemplates',
    breadcrumbText: '::TransportationSetViewTemplates',
  },
];
