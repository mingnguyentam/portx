import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingFileCaseMarkComponent } from './components/shipping-file-case-mark.component';

export const routes: Routes = [
  {
    path: '',
    component: ShippingFileCaseMarkComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingFileCaseMarkRoutingModule {}
