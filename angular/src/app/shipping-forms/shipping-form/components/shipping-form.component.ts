import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NgbDateAdapter,
  NgbTimeAdapter,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ListService, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule, DateAdapter, TimeAdapter } from '@abp/ng.theme.shared';
import { PageModule } from '@abp/ng.components/page';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';

import { ShippingFormViewService } from '../services/shipping-form.service';
import { ShippingFormDetailViewService } from '../services/shipping-form-detail.service';
import { ShippingFormDetailModalComponent } from './shipping-form-detail.component';
import {
  AbstractShippingFormComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-form.abstract.component';

@Component({
  selector: 'app-shipping-form',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [
    ...ChildTabDependencies,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,

    NgxValidateCoreModule,

    PageModule,
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    ShippingFormDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingFormViewService,
    ShippingFormDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-form.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingFormComponent extends AbstractShippingFormComponent {}
