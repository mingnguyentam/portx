import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { TransportationSetItemGroupDto } from '../../../proxy/transportation-set-item-groups/models';
import { TransportationSetItemGroupViewService } from '../services/transportation-set-item-group.service';
import { TransportationSetItemGroupDetailViewService } from '../services/transportation-set-item-group-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractTransportationSetItemGroupComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(TransportationSetItemGroupViewService);
  public readonly serviceDetail = inject(TransportationSetItemGroupDetailViewService);
  protected title = '::TransportationSetItemGroups';

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

  update(record: TransportationSetItemGroupDto) {
    this.serviceDetail.update(record);
  }

  delete(record: TransportationSetItemGroupDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
