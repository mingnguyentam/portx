import { CoreModule, provideAbpCore, withOptions } from '@abp/ng.core';
import { provideAbpOAuth } from '@abp/ng.oauth';
import { provideSettingManagementConfig } from '@abp/ng.setting-management/config';
import { provideFeatureManagementConfig } from '@abp/ng.feature-management';
import {
  ThemeSharedModule,
  provideAbpThemeShared,
  withValidationBluePrint,
  withHttpErrorConfig,
} from '@abp/ng.theme.shared';
import { IdentityConfigModule, provideIdentityConfig } from '@volo/abp.ng.identity/config';
import { provideCommercialUiConfig } from '@volo/abp.commercial.ng.ui/config';
import {
  AccountAdminConfigModule,
  provideAccountAdminConfig,
} from '@volo/abp.ng.account/admin/config';
import { provideAccountPublicConfig } from '@volo/abp.ng.account/public/config';
import {
  GdprConfigModule,
  provideGdprConfig,
  withCookieConsentOptions,
} from '@volo/abp.ng.gdpr/config';
import {
  AuditLoggingConfigModule,
  provideAuditLoggingConfig,
} from '@volo/abp.ng.audit-logging/config';
import { provideLanguageManagementConfig } from '@volo/abp.ng.language-management/config';
import { registerLocale } from '@volo/abp.ng.language-management/locale';
import { provideFileManagementConfig } from '@volo/abp.ng.file-management/config';
import { provideChatConfig } from '@volo/abp.ng.chat/config';
import { provideSaasConfig } from '@volo/abp.ng.saas/config';
import { provideTextTemplateManagementConfig } from '@volo/abp.ng.text-template-management/config';
import { provideOpeniddictproConfig } from '@volo/abp.ng.openiddictpro/config';
import { HttpErrorComponent, ThemeLeptonXModule } from '@volosoft/abp.ng.theme.lepton-x';
import { SideMenuLayoutModule } from '@volosoft/abp.ng.theme.lepton-x/layouts';
import { AccountLayoutModule } from '@volosoft/abp.ng.theme.lepton-x/account';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { SHIPPING_FORMS_SHIPPING_FORM_ROUTE_PROVIDER } from './shipping-forms/shipping-form/providers/shipping-form-route.provider';
import { SHIPPING_HISTORIES_SHIPPING_HISTORY_ROUTE_PROVIDER } from './shipping-histories/shipping-history/providers/shipping-history-route.provider';
import { SHIPPING_FILE_CASE_MARKS_SHIPPING_FILE_CASE_MARK_ROUTE_PROVIDER } from './shipping-file-case-marks/shipping-file-case-mark/providers/shipping-file-case-mark-route.provider';
import { LOCATIONS_LOCATION_ROUTE_PROVIDER } from './locations/location/providers/location-route.provider';
import { TRANSPORTATION_SETS_TRANSPORTATION_SET_ROUTE_PROVIDER } from './transportation-sets/transportation-set/providers/transportation-set-route.provider';
import { TRANSPORTATION_SET_ITEMS_TRANSPORTATION_SET_ITEM_ROUTE_PROVIDER } from './transportation-set-items/transportation-set-item/providers/transportation-set-item-route.provider';
import { SHIPPING_WORKFLOWS_SHIPPING_WORKFLOW_ROUTE_PROVIDER } from './shipping-workflows/shipping-workflow/providers/shipping-workflow-route.provider';
import { SHIPPING_MILESTONES_SHIPPING_MILESTONE_ROUTE_PROVIDER } from './shipping-milestones/shipping-milestone/providers/shipping-milestone-route.provider';
import { SHIPPING_MILESTONE_STEPS_SHIPPING_MILESTONE_STEP_ROUTE_PROVIDER } from './shipping-milestone-steps/shipping-milestone-step/providers/shipping-milestone-step-route.provider';
import { SHIPPING_WORKFLOW_DISPLAY_ITEMS_SHIPPING_WORKFLOW_DISPLAY_ITEM_ROUTE_PROVIDER } from './shipping-workflow-display-items/shipping-workflow-display-item/providers/shipping-workflow-display-item-route.provider';
import { COMBINED_LANES_COMBINED_LANE_ROUTE_PROVIDER } from './combined-lanes/combined-lane/providers/combined-lane-route.provider';
import { COMBINED_LANE_ITEMS_COMBINED_LANE_ITEM_ROUTE_PROVIDER } from './combined-lane-items/combined-lane-item/providers/combined-lane-item-route.provider';
import { PRODUCT_REQUIRED_DOCUMENT_MASTERS_PRODUCT_REQUIRED_DOCUMENT_MASTER_ROUTE_PROVIDER } from './product-required-document-masters/product-required-document-master/providers/product-required-document-master-route.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeSharedModule,
    CoreModule,
    AccountAdminConfigModule,
    IdentityConfigModule,
    GdprConfigModule,
    AuditLoggingConfigModule,
    ThemeLeptonXModule.forRoot(),
    SideMenuLayoutModule.forRoot(),
    AccountLayoutModule.forRoot(),
  ],
  providers: [
    APP_ROUTE_PROVIDER,
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocale(),
      }),
    ),
    provideAbpOAuth(),
    provideIdentityConfig(),
    provideSettingManagementConfig(),
    provideFeatureManagementConfig(),
    provideAccountAdminConfig(),
    provideAccountPublicConfig(),
    provideCommercialUiConfig(),
    provideAbpThemeShared(
      withHttpErrorConfig({
        errorScreen: {
          component: HttpErrorComponent,
          forWhichErrors: [401, 403, 404, 500],
          hideCloseIcon: true,
        },
      }),
      withValidationBluePrint({
        wrongPassword: 'Please choose 1q2w3E*',
      }),
    ),
    provideGdprConfig(
      withCookieConsentOptions({
        cookiePolicyUrl: '/gdpr-cookie-consent/cookie',
        privacyPolicyUrl: '/gdpr-cookie-consent/privacy',
      }),
    ),
    provideLanguageManagementConfig(),
    provideFileManagementConfig(),
    provideSaasConfig(),
    provideChatConfig(),
    provideAuditLoggingConfig(),
    provideOpeniddictproConfig(),
    provideTextTemplateManagementConfig(),
    SHIPPING_FORMS_SHIPPING_FORM_ROUTE_PROVIDER,
    SHIPPING_HISTORIES_SHIPPING_HISTORY_ROUTE_PROVIDER,
    SHIPPING_FILE_CASE_MARKS_SHIPPING_FILE_CASE_MARK_ROUTE_PROVIDER,
    LOCATIONS_LOCATION_ROUTE_PROVIDER,
    TRANSPORTATION_SETS_TRANSPORTATION_SET_ROUTE_PROVIDER,
    TRANSPORTATION_SET_ITEMS_TRANSPORTATION_SET_ITEM_ROUTE_PROVIDER,
    SHIPPING_WORKFLOWS_SHIPPING_WORKFLOW_ROUTE_PROVIDER,
    SHIPPING_MILESTONES_SHIPPING_MILESTONE_ROUTE_PROVIDER,
    SHIPPING_MILESTONE_STEPS_SHIPPING_MILESTONE_STEP_ROUTE_PROVIDER,
    SHIPPING_WORKFLOW_DISPLAY_ITEMS_SHIPPING_WORKFLOW_DISPLAY_ITEM_ROUTE_PROVIDER,
    COMBINED_LANES_COMBINED_LANE_ROUTE_PROVIDER,
    COMBINED_LANE_ITEMS_COMBINED_LANE_ITEM_ROUTE_PROVIDER,
    PRODUCT_REQUIRED_DOCUMENT_MASTERS_PRODUCT_REQUIRED_DOCUMENT_MASTER_ROUTE_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
