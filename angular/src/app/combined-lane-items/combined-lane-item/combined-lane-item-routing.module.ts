import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedLaneItemComponent } from './components/combined-lane-item.component';

export const routes: Routes = [
  {
    path: '',
    component: CombinedLaneItemComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinedLaneItemRoutingModule {}
