import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_MILESTONE_BASE_ROUTES } from './shipping-milestone-base.routes';

export const SHIPPING_MILESTONES_SHIPPING_MILESTONE_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_MILESTONE_BASE_ROUTES];
    routesService.add(routes);
  };
}
