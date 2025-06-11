import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule, DateAdapter, TimeAdapter } from '@abp/ng.theme.shared';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbNavModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbDateAdapter,
  NgbTimeAdapter,
} from '@ng-bootstrap/ng-bootstrap';
import { ChatGroupDetailViewService } from '../services/chat-group-detail.service';

@Component({
  selector: 'app-chat-group-detail-modal',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    CommercialUiModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbNavModule,
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  templateUrl: './chat-group-detail.component.html',
  styles: [],
})
export class ChatGroupDetailModalComponent {
  public readonly service = inject(ChatGroupDetailViewService);
}
