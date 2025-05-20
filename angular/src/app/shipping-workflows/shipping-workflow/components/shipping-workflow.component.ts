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

import { ShippingWorkflowViewService } from '../services/shipping-workflow.service';
import { ShippingWorkflowDetailViewService } from '../services/shipping-workflow-detail.service';
import { ShippingWorkflowDetailModalComponent } from './shipping-workflow-detail.component';
import {
  AbstractShippingWorkflowComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-workflow.abstract.component';

@Component({
  selector: 'app-shipping-workflow',
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
    ShippingWorkflowDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingWorkflowViewService,
    ShippingWorkflowDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-workflow.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingWorkflowComponent extends AbstractShippingWorkflowComponent {}
