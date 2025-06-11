import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationSetSupplierViewTemplateComponent } from './components/transportation-set-supplier-view-template.component';

export const routes: Routes = [
  {
    path: '',
    component: TransportationSetSupplierViewTemplateComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationSetSupplierViewTemplateRoutingModule {}
