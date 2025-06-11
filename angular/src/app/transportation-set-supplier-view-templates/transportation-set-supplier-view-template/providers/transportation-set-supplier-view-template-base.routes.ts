import { ABP, eLayoutType } from '@abp/ng.core';

export const TRANSPORTATION_SET_SUPPLIER_VIEW_TEMPLATE_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/transportation-set-supplier-view-templates',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:TransportationSetSupplierViewTemplates',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.TransportationSetSupplierViewTemplates',
    breadcrumbText: '::TransportationSetSupplierViewTemplates',
  },
];
