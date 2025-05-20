import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingWorkflowDto } from '../../../proxy/shipping-workflows/models';
import { ShippingWorkflowViewService } from '../services/shipping-workflow.service';
import { ShippingWorkflowDetailViewService } from '../services/shipping-workflow-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingWorkflowComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingWorkflowViewService);
  public readonly serviceDetail = inject(ShippingWorkflowDetailViewService);
  protected title = '::ShippingWorkflows';

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

  update(record: ShippingWorkflowDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingWorkflowDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
