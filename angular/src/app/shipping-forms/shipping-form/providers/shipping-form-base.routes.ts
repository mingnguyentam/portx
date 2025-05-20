import { ABP, eLayoutType } from '@abp/ng.core';

export const SHIPPING_FORM_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/shipping-forms',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ShippingForms',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ShippingForms',
    breadcrumbText: '::ShippingForms',
  },
];
