import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ShippingFileCaseMarkWithNavigationPropertiesDto } from '../../../proxy/shipping-file-case-marks/models';
import { ShippingFileCaseMarkViewService } from '../services/shipping-file-case-mark.service';
import { ShippingFileCaseMarkDetailViewService } from '../services/shipping-file-case-mark-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractShippingFileCaseMarkComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ShippingFileCaseMarkViewService);
  public readonly serviceDetail = inject(ShippingFileCaseMarkDetailViewService);
  protected title = '::ShippingFileCaseMarks';

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

  update(record: ShippingFileCaseMarkWithNavigationPropertiesDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ShippingFileCaseMarkWithNavigationPropertiesDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
