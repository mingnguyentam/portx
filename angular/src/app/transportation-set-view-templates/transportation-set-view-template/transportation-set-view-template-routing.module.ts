import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportationSetViewTemplateComponent } from './components/transportation-set-view-template.component';

export const routes: Routes = [
  {
    path: '',
    component: TransportationSetViewTemplateComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationSetViewTemplateRoutingModule {}
