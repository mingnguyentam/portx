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

import { CombinedLaneItemViewService } from '../services/combined-lane-item.service';
import { CombinedLaneItemDetailViewService } from '../services/combined-lane-item-detail.service';
import { CombinedLaneItemDetailModalComponent } from './combined-lane-item-detail.component';
import {
  AbstractCombinedLaneItemComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './combined-lane-item.abstract.component';

@Component({
  selector: 'app-combined-lane-item',
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
    CombinedLaneItemDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    CombinedLaneItemViewService,
    CombinedLaneItemDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './combined-lane-item.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class CombinedLaneItemComponent extends AbstractCombinedLaneItemComponent {}
