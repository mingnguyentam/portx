import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingWorkflowDisplayItemDto } from '../../../proxy/shipping-workflow-display-items/models';
import { ShippingWorkflowDisplayItemViewService } from '../services/shipping-workflow-display-item.service';
import { ShippingWorkflowDisplayItemDetailViewService } from '../services/shipping-workflow-display-item-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingWorkflowDisplayItemComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingWorkflowDisplayItemViewService);
  public readonly serviceDetail = inject(ShippingWorkflowDisplayItemDetailViewService);
  protected title = '::ShippingWorkflowDisplayItems';

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

  update(record: ShippingWorkflowDisplayItemDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingWorkflowDisplayItemDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
