import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingMilestoneStepDto } from '../../../proxy/shipping-milestone-steps/models';
import { ShippingMilestoneStepViewService } from '../services/shipping-milestone-step.service';
import { ShippingMilestoneStepDetailViewService } from '../services/shipping-milestone-step-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingMilestoneStepComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingMilestoneStepViewService);
  public readonly serviceDetail = inject(ShippingMilestoneStepDetailViewService);
  protected title = '::ShippingMilestoneSteps';

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

  update(record: ShippingMilestoneStepDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingMilestoneStepDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
