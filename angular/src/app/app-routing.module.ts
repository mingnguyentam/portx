import { authGuard, permissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@volo/abp.ng.account/public').then(m => m.AccountPublicModule.forLazy()),
  },
  {
    path: 'gdpr',
    loadChildren: () => import('@volo/abp.ng.gdpr').then(m => m.GdprModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@volo/abp.ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'language-management',
    loadChildren: () =>
      import('@volo/abp.ng.language-management').then(m => m.LanguageManagementModule.forLazy()),
  },
  {
    path: 'saas',
    loadChildren: () => import('@volo/abp.ng.saas').then(m => m.SaasModule.forLazy()),
  },
  {
    path: 'chat',
    loadChildren: () => import('@volo/abp.ng.chat').then(m => m.ChatModule.forLazy()),
  },
  {
    path: 'audit-logs',
    loadChildren: () =>
      import('@volo/abp.ng.audit-logging').then(m => m.AuditLoggingModule.forLazy()),
  },
  {
    path: 'openiddict',
    loadChildren: () =>
      import('@volo/abp.ng.openiddictpro').then(m => m.OpeniddictproModule.forLazy()),
  },
  {
    path: 'text-template-management',
    loadChildren: () =>
      import('@volo/abp.ng.text-template-management').then(m =>
        m.TextTemplateManagementModule.forLazy(),
      ),
  },
  {
    path: 'file-management',
    loadChildren: () =>
      import('@volo/abp.ng.file-management').then(m => m.FileManagementModule.forLazy()),
  },
  {
    path: 'gdpr-cookie-consent',
    loadChildren: () =>
      import('./gdpr-cookie-consent/gdpr-cookie-consent.module').then(
        m => m.GdprCookieConsentModule,
      ),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  {
    path: 'shipping-forms',
    loadChildren: () =>
      import('./shipping-forms/shipping-form/shipping-form.module').then(m => m.ShippingFormModule),
  },
  {
    path: 'shipping-histories',
    loadChildren: () =>
      import('./shipping-histories/shipping-history/shipping-history.module').then(
        m => m.ShippingHistoryModule,
      ),
  },
  {
    path: 'shipping-file-case-marks',
    loadChildren: () =>
      import(
        './shipping-file-case-marks/shipping-file-case-mark/shipping-file-case-mark.module'
      ).then(m => m.ShippingFileCaseMarkModule),
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/location/location.module').then(m => m.LocationModule),
  },
  {
    path: 'transportation-sets',
    loadChildren: () =>
      import('./transportation-sets/transportation-set/transportation-set.module').then(
        m => m.TransportationSetModule,
      ),
  },
  {
    path: 'transportation-set-items',
    loadChildren: () =>
      import(
        './transportation-set-items/transportation-set-item/transportation-set-item.module'
      ).then(m => m.TransportationSetItemModule),
  },
  {
    path: 'shipping-workflows',
    loadChildren: () =>
      import('./shipping-workflows/shipping-workflow/shipping-workflow.module').then(
        m => m.ShippingWorkflowModule,
      ),
  },
  {
    path: 'shipping-milestones',
    loadChildren: () =>
      import('./shipping-milestones/shipping-milestone/shipping-milestone.module').then(
        m => m.ShippingMilestoneModule,
      ),
  },
  {
    path: 'shipping-milestone-steps',
    loadChildren: () =>
      import(
        './shipping-milestone-steps/shipping-milestone-step/shipping-milestone-step.module'
      ).then(m => m.ShippingMilestoneStepModule),
  },
  {
    path: 'shipping-workflow-display-items',
    loadChildren: () =>
      import(
        './shipping-workflow-display-items/shipping-workflow-display-item/shipping-workflow-display-item.module'
      ).then(m => m.ShippingWorkflowDisplayItemModule),
  },
  {
    path: 'combined-lanes',
    loadChildren: () =>
      import('./combined-lanes/combined-lane/combined-lane.module').then(m => m.CombinedLaneModule),
  },
  {
    path: 'combined-lane-items',
    loadChildren: () =>
      import('./combined-lane-items/combined-lane-item/combined-lane-item.module').then(
        m => m.CombinedLaneItemModule,
      ),
  },
  {
    path: 'product-required-document-masters',
    loadChildren: () =>
      import(
        './product-required-document-masters/product-required-document-master/product-required-document-master.module'
      ).then(m => m.ProductRequiredDocumentMasterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
