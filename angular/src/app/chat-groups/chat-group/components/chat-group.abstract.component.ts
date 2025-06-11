import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ChatGroupDto } from '../../../proxy/chat-groups/models';
import { ChatGroupViewService } from '../services/chat-group.service';
import { ChatGroupDetailViewService } from '../services/chat-group-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractChatGroupComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ChatGroupViewService);
  public readonly serviceDetail = inject(ChatGroupDetailViewService);
  protected title = '::ChatGroups';

  ngOnInit() {
    this.service.hookToQuery();
  }

  clearFilters() {
    this.service.clearFilters();
  }

  showForm() {
    this.serviceDetail.showForm();
  }

  create() {
    this.serviceDetail.selected = undefined;
    this.serviceDetail.showForm();
  }

  update(record: ChatGroupDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ChatGroupDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
