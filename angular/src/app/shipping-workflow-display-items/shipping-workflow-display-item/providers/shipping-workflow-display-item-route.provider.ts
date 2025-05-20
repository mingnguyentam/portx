import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { SHIPPING_WORKFLOW_DISPLAY_ITEM_BASE_ROUTES } from './shipping-workflow-display-item-base.routes';

export const SHIPPING_WORKFLOW_DISPLAY_ITEMS_SHIPPING_WORKFLOW_DISPLAY_ITEM_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...SHIPPING_WORKFLOW_DISPLAY_ITEM_BASE_ROUTES];
    routesService.add(routes);
  };
}
