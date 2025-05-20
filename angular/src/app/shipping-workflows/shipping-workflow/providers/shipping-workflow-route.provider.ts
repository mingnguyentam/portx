import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_WORKFLOW_BASE_ROUTES } from './shipping-workflow-base.routes';

export const SHIPPING_WORKFLOWS_SHIPPING_WORKFLOW_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_WORKFLOW_BASE_ROUTES];
    routesService.add(routes);
  };
}
