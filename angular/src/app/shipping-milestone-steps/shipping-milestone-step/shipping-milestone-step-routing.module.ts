import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingMilestoneStepComponent } from './components/shipping-milestone-step.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingMilestoneStepComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingMilestoneStepRoutingModule {}
