import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_FORM_BASE_ROUTES } from './shipping-form-base.routes';

export const SHIPPING_FORMS_SHIPPING_FORM_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_FORM_BASE_ROUTES];
    routesService.add(routes);
  };
}
