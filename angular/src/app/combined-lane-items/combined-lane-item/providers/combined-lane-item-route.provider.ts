import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { COMBINED_LANE_ITEM_BASE_ROUTES } from './combined-lane-item-base.routes';

export const COMBINED_LANE_ITEMS_COMBINED_LANE_ITEM_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...COMBINED_LANE_ITEM_BASE_ROUTES];
    routesService.add(routes);
  };
}
