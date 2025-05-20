import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingHistoryDto } from '../../../proxy/shipping-histories/models';
import { ShippingHistoryViewService } from '../services/shipping-history.service';
import { ShippingHistoryDetailViewService } from '../services/shipping-history-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingHistoryComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingHistoryViewService);
  public readonly serviceDetail = inject(ShippingHistoryDetailViewService);
  protected title = '::ShippingHistories';

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

  update(record: ShippingHistoryDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingHistoryDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
