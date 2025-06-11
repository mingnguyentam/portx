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

import { TransportationSetViewTemplateViewService } from '../services/transportation-set-view-template.service';
import { TransportationSetViewTemplateDetailViewService } from '../services/transportation-set-view-template-detail.service';
import { TransportationSetViewTemplateDetailModalComponent } from './transportation-set-view-template-detail.component';
import {
  AbstractTransportationSetViewTemplateComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './transportation-set-view-template.abstract.component';

@Component({
  selector: 'app-transportation-set-view-template',
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
    TransportationSetViewTemplateDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    TransportationSetViewTemplateViewService,
    TransportationSetViewTemplateDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './transportation-set-view-template.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class TransportationSetViewTemplateComponent extends AbstractTransportationSetViewTemplateComponent {}
