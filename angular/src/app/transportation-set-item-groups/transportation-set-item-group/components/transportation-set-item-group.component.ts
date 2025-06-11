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

import { TransportationSetItemGroupViewService } from '../services/transportation-set-item-group.service';
import { TransportationSetItemGroupDetailViewService } from '../services/transportation-set-item-group-detail.service';
import { TransportationSetItemGroupDetailModalComponent } from './transportation-set-item-group-detail.component';
import {
  AbstractTransportationSetItemGroupComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './transportation-set-item-group.abstract.component';

@Component({
  selector: 'app-transportation-set-item-group',
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
    TransportationSetItemGroupDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    TransportationSetItemGroupViewService,
    TransportationSetItemGroupDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './transportation-set-item-group.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class TransportationSetItemGroupComponent extends AbstractTransportationSetItemGroupComponent {}
