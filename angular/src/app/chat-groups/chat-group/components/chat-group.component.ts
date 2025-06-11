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

import { ChatGroupViewService } from '../services/chat-group.service';
import { ChatGroupDetailViewService } from '../services/chat-group-detail.service';
import { ChatGroupDetailModalComponent } from './chat-group-detail.component';
import {
  AbstractChatGroupComponent,
  ChildTabDependencies,
  ChildComponentDependencies,
} from './chat-group.abstract.component';

@Component({
  selector: 'app-chat-group',
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
    ChatGroupDetailModalComponent,
    ...ChildComponentDependencies,
  ],
  providers: [
    ListService,
    ChatGroupViewService,
    ChatGroupDetailViewService,
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './chat-group.component.html',
  styles: `
    ::ng-deep.datatable-row-detail {
      background: transparent !important;
    }
  `,
})
export class ChatGroupComponent extends AbstractChatGroupComponent {}
