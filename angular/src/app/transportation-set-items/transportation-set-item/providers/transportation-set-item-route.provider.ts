import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { TRANSPORTATION_SET_ITEM_BASE_ROUTES } from './transportation-set-item-base.routes';

export const TRANSPORTATION_SET_ITEMS_TRANSPORTATION_SET_ITEM_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...TRANSPORTATION_SET_ITEM_BASE_ROUTES];
    routesService.add(routes);
  };
}
