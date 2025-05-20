import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { TransportationSetDto } from '../../../proxy/transportation-sets/models';
import { TransportationSetViewService } from '../services/transportation-set.service';
import { TransportationSetDetailViewService } from '../services/transportation-set-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractTransportationSetComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(TransportationSetViewService);
  public readonly serviceDetail = inject(TransportationSetDetailViewService);
  protected title = '::TransportationSets';

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

  update(record: TransportationSetDto) {
    this.serviceDetail.update(record);
  }

  delete(record: TransportationSetDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
