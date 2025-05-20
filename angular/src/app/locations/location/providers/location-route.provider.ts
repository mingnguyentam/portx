import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { LOCATION_BASE_ROUTES } from './location-base.routes';

export const LOCATIONS_LOCATION_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...LOCATION_BASE_ROUTES];
    routesService.add(routes);
  };
}
