import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingWorkflowDisplayItemComponent } from './components/shipping-workflow-display-item.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingWorkflowDisplayItemComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingWorkflowDisplayItemRoutingModule {}
