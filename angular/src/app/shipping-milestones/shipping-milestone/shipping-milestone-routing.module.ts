import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingMilestoneComponent } from './components/shipping-milestone.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingMilestoneComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingMilestoneRoutingModule {}
