import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingHistoryComponent } from './components/shipping-history.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingHistoryComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingHistoryRoutingModule {}
