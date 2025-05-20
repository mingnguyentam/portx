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

import { TransportationSetItemViewService } from '../services/transportation-set-item.service';
import { TransportationSetItemDetailViewService } from '../services/transportation-set-item-detail.service';
import { TransportationSetItemDetailModalComponent } from './transportation-set-item-detail.component';
import {
  AbstractTransportationSetItemComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './transportation-set-item.abstract.component';

@Component({
  selector: 'app-transportation-set-item',
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
    TransportationSetItemDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    TransportationSetItemViewService,
    TransportationSetItemDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './transportation-set-item.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class TransportationSetItemComponent extends AbstractTransportationSetItemComponent {}
