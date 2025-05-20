import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_HISTORY_BASE_ROUTES } from './shipping-history-base.routes';

export const SHIPPING_HISTORIES_SHIPPING_HISTORY_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_HISTORY_BASE_ROUTES];
    routesService.add(routes);
  };
}
