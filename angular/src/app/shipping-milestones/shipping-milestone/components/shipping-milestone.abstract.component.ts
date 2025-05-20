import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingMilestoneDto } from '../../../proxy/shipping-milestones/models';
import { ShippingMilestoneViewService } from '../services/shipping-milestone.service';
import { ShippingMilestoneDetailViewService } from '../services/shipping-milestone-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingMilestoneComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingMilestoneViewService);
  public readonly serviceDetail = inject(ShippingMilestoneDetailViewService);
  protected title = '::ShippingMilestones';

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

  update(record: ShippingMilestoneDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingMilestoneDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
