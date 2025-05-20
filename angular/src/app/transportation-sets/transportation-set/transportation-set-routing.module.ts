import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationSetComponent } from './components/transportation-set.component';

export const routes: Routes = [
  {
    path: '',
    component: TransportationSetComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationSetRoutingModule {}
