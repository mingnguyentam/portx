import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationSetItemComponent } from './components/transportation-set-item.component';

export const routes: Routes = [
  {
    path: '',
    component: TransportationSetItemComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationSetItemRoutingModule {}
