import { ABP, eLayoutType } from '@abp/ng.core';

export const CHAT_GROUP_BASE_ROUTES: ABP.Route[] = [
  {
    path: '/chat-groups',
    iconClass: 'fas fa-file-alt',
    name: '::Menu:ChatGroups',
    layout: eLayoutType.application,
    requiredPolicy: 'PortX.ChatGroups',
    breadcrumbText: '::ChatGroups',
  },
];
