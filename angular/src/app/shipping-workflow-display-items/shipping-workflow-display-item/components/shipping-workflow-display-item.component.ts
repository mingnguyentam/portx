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

import { ShippingWorkflowDisplayItemViewService } from '../services/shipping-workflow-display-item.service';
import { ShippingWorkflowDisplayItemDetailViewService } from '../services/shipping-workflow-display-item-detail.service';
import { ShippingWorkflowDisplayItemDetailModalComponent } from './shipping-workflow-display-item-detail.component';
import {
  AbstractShippingWorkflowDisplayItemComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-workflow-display-item.abstract.component';

@Component({
  selector: 'app-shipping-workflow-display-item',
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
    ShippingWorkflowDisplayItemDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingWorkflowDisplayItemViewService,
    ShippingWorkflowDisplayItemDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-workflow-display-item.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingWorkflowDisplayItemComponent extends AbstractShippingWorkflowDisplayItemComponent {}
