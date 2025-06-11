import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { CHAT_GROUP_BASE_ROUTES } from './chat-group-base.routes';

export const CHAT_GROUPS_CHAT_GROUP_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...CHAT_GROUP_BASE_ROUTES];
    routesService.add(routes);
  };
}
