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

import { ShippingMilestoneViewService } from '../services/shipping-milestone.service';
import { ShippingMilestoneDetailViewService } from '../services/shipping-milestone-detail.service';
import { ShippingMilestoneDetailModalComponent } from './shipping-milestone-detail.component';
import {
  AbstractShippingMilestoneComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-milestone.abstract.component';

@Component({
  selector: 'app-shipping-milestone',
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
    ShippingMilestoneDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingMilestoneViewService,
    ShippingMilestoneDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-milestone.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingMilestoneComponent extends AbstractShippingMilestoneComponent {}
