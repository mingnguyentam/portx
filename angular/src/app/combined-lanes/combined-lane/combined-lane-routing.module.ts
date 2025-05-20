import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedLaneComponent } from './components/combined-lane.component';

export const routes: Routes = [
  {
    path: '',
    component: CombinedLaneComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinedLaneRoutingModule {}
