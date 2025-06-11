import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { TRANSPORTATION_SET_VIEW_TEMPLATE_BASE_ROUTES } from './transportation-set-view-template-base.routes';

export const TRANSPORTATION_SET_VIEW_TEMPLATES_TRANSPORTATION_SET_VIEW_TEMPLATE_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...TRANSPORTATION_SET_VIEW_TEMPLATE_BASE_ROUTES];
    routesService.add(routes);
  };
}
