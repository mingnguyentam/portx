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

import { ProductRequiredDocumentMasterViewService } from '../services/product-required-document-master.service';
import { ProductRequiredDocumentMasterDetailViewService } from '../services/product-required-document-master-detail.service';
import { ProductRequiredDocumentMasterDetailModalComponent } from './product-required-document-master-detail.component';
import {
  AbstractProductRequiredDocumentMasterComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './product-required-document-master.abstract.component';

@Component({
  selector: 'app-product-required-document-master',
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
    ProductRequiredDocumentMasterDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ProductRequiredDocumentMasterViewService,
    ProductRequiredDocumentMasterDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './product-required-document-master.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ProductRequiredDocumentMasterComponent extends AbstractProductRequiredDocumentMasterComponent {}
