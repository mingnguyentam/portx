import { APP_INITIALIZER, inject } from '@angular/core';
import { ABP, RoutesService } from '@abp/ng.core';
import { PRODUCT_REQUIRED_DOCUMENT_MASTER_BASE_ROUTES } from './product-required-document-master-base.routes';

export const PRODUCT_REQUIRED_DOCUMENT_MASTERS_PRODUCT_REQUIRED_DOCUMENT_MASTER_ROUTE_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: configureRoutes,
  },
];

function configureRoutes() {
  const routesService = inject(RoutesService);

  return () => {
    const routes: ABP.Route[] = [...PRODUCT_REQUIRED_DOCUMENT_MASTER_BASE_ROUTES];
    routesService.add(routes);
  };
}
