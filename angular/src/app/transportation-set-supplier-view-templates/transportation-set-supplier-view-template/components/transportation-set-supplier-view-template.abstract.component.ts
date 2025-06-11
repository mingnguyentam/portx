import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { TransportationSetSupplierViewTemplateDto } from '../../../proxy/transportation-set-supplier-view-templates/models';
import { TransportationSetSupplierViewTemplateViewService } from '../services/transportation-set-supplier-view-template.service';
import { TransportationSetSupplierViewTemplateDetailViewService } from '../services/transportation-set-supplier-view-template-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractTransportationSetSupplierViewTemplateComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(TransportationSetSupplierViewTemplateViewService);
  public readonly serviceDetail = inject(TransportationSetSupplierViewTemplateDetailViewService);
  protected title = '::TransportationSetSupplierViewTemplates';

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

  update(record: TransportationSetSupplierViewTemplateDto) {
    this.serviceDetail.update(record);
  }

  delete(record: TransportationSetSupplierViewTemplateDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
