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

import { CombinedLaneViewService } from '../services/combined-lane.service';
import { CombinedLaneDetailViewService } from '../services/combined-lane-detail.service';
import { CombinedLaneDetailModalComponent } from './combined-lane-detail.component';
import {
  AbstractCombinedLaneComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './combined-lane.abstract.component';

@Component({
  selector: 'app-combined-lane',
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
    CombinedLaneDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    CombinedLaneViewService,
    CombinedLaneDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './combined-lane.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class CombinedLaneComponent extends AbstractCombinedLaneComponent {}
