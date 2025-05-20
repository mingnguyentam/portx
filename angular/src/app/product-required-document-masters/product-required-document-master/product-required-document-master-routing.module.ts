import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductRequiredDocumentMasterComponent } from './components/product-required-document-master.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductRequiredDocumentMasterComponent,
    canActivate: [authGuard, permissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRequiredDocumentMasterRoutingModule {}
