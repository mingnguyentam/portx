import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationSetItemGroupComponent } from './components/transportation-set-item-group.component';

export const routes: Routes = [
  {
    path: '',
    component: TransportationSetItemGroupComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationSetItemGroupRoutingModule {}
