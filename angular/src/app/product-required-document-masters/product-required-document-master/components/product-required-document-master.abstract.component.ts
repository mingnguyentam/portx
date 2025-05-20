import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { ProductRequiredDocumentMasterWithNavigationPropertiesDto } from '../../../proxy/product-required-document-masters/models';
import { ProductRequiredDocumentMasterViewService } from '../services/product-required-document-master.service';
import { ProductRequiredDocumentMasterDetailViewService } from '../services/product-required-document-master-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractProductRequiredDocumentMasterComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(ProductRequiredDocumentMasterViewService);
  public readonly serviceDetail = inject(ProductRequiredDocumentMasterDetailViewService);
  protected title = '::ProductRequiredDocumentMasters';

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

  update(record: ProductRequiredDocumentMasterWithNavigationPropertiesDto) {
    this.serviceDetail.update(record);
  }

  delete(record: ProductRequiredDocumentMasterWithNavigationPropertiesDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
