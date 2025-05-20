import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { TransportationSetItemDto } from '../../../proxy/transportation-set-items/models';
import { TransportationSetItemViewService } from '../services/transportation-set-item.service';
import { TransportationSetItemDetailViewService } from '../services/transportation-set-item-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractTransportationSetItemComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(TransportationSetItemViewService);
  public readonly serviceDetail = inject(TransportationSetItemDetailViewService);
  protected title = '::TransportationSetItems';

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

  update(record: TransportationSetItemDto) {
    this.serviceDetail.update(record);
  }

  delete(record: TransportationSetItemDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
