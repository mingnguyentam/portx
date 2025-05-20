import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_FILE_CASE_MARK_BASE_ROUTES } from './shipping-file-case-mark-base.routes';

export const SHIPPING_FILE_CASE_MARKS_SHIPPING_FILE_CASE_MARK_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_FILE_CASE_MARK_BASE_ROUTES];
    routesService.add(routes);
  };
}
