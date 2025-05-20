import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { COMBINED_LANE_BASE_ROUTES } from './combined-lane-base.routes';

export const COMBINED_LANES_COMBINED_LANE_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...COMBINED_LANE_BASE_ROUTES];
    routesService.add(routes);
  };
}
