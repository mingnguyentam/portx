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

import { TransportationSetViewService } from '../services/transportation-set.service';
import { TransportationSetDetailViewService } from '../services/transportation-set-detail.service';
import { TransportationSetDetailModalComponent } from './transportation-set-detail.component';
import {
  AbstractTransportationSetComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './transportation-set.abstract.component';

@Component({
  selector: 'app-transportation-set',
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
    TransportationSetDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    TransportationSetViewService,
    TransportationSetDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './transportation-set.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class TransportationSetComponent extends AbstractTransportationSetComponent {}
