import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingFormDto } from '../../../proxy/shipping-forms/models';
import { ShippingFormViewService } from '../services/shipping-form.service';
import { ShippingFormDetailViewService } from '../services/shipping-form-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingFormComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingFormViewService);
  public readonly serviceDetail = inject(ShippingFormDetailViewService);
  protected title = '::ShippingForms';

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

  update(record: ShippingFormDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingFormDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
