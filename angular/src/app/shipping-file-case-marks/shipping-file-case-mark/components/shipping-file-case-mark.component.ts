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

import { ShippingFileCaseMarkViewService } from '../services/shipping-file-case-mark.service';
import { ShippingFileCaseMarkDetailViewService } from '../services/shipping-file-case-mark-detail.service';
import { ShippingFileCaseMarkDetailModalComponent } from './shipping-file-case-mark-detail.component';
import {
  AbstractShippingFileCaseMarkComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './shipping-file-case-mark.abstract.component';

@Component({
  selector: 'app-shipping-file-case-mark',
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
    ShippingFileCaseMarkDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ShippingFileCaseMarkViewService,
    ShippingFileCaseMarkDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './shipping-file-case-mark.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ShippingFileCaseMarkComponent extends AbstractShippingFileCaseMarkComponent {}
