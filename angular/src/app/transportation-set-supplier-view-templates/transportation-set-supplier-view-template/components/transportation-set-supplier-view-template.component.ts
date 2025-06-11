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

import { TransportationSetSupplierViewTemplateViewService } from '../services/transportation-set-supplier-view-template.service';
import { TransportationSetSupplierViewTemplateDetailViewService } from '../services/transportation-set-supplier-view-template-detail.service';
import { TransportationSetSupplierViewTemplateDetailModalComponent } from './transportation-set-supplier-view-template-detail.component';
import {
  AbstractTransportationSetSupplierViewTemplateComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './transportation-set-supplier-view-template.abstract.component';

@Component({
  selector: 'app-transportation-set-supplier-view-template',
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
    TransportationSetSupplierViewTemplateDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    TransportationSetSupplierViewTemplateViewService,
    TransportationSetSupplierViewTemplateDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './transportation-set-supplier-view-template.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class TransportationSetSupplierViewTemplateComponent extends AbstractTransportationSetSupplierViewTemplateComponent {}
