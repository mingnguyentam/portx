import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { TransportationSetViewTemplateDto } from '../../../proxy/transportation-set-view-templates/models';
import { TransportationSetViewTemplateViewService } from '../services/transportation-set-view-template.service';
import { TransportationSetViewTemplateDetailViewService } from '../services/transportation-set-view-template-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractTransportationSetViewTemplateComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(TransportationSetViewTemplateViewService);
  public readonly serviceDetail = inject(TransportationSetViewTemplateDetailViewService);
  protected title = '::TransportationSetViewTemplates';

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

  update(record: TransportationSetViewTemplateDto) {
    this.serviceDetail.update(record);
  }

  delete(record: TransportationSetViewTemplateDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
