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

import { ShippingMilestoneStepViewService } from '../services/shipping-milestone-step.service';
import { ShippingMilestoneStepDetailViewService } from '../services/shipping-milestone-step-detail.service';
import { ShippingMilestoneStepDetailModalComponent } from './shipping-milestone-step-detail.component';
import {
  AbstractShippingMilestoneStepComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-milestone-step.abstract.component';

@Component({
  selector: 'app-shipping-milestone-step',
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
    ShippingMilestoneStepDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingMilestoneStepViewService,
    ShippingMilestoneStepDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-milestone-step.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingMilestoneStepComponent extends AbstractShippingMilestoneStepComponent {}
