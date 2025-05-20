import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingWorkflowComponent } from './components/shipping-workflow.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingWorkflowComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingWorkflowRoutingModule {}
