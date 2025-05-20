import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { CombinedLaneItemWithNavigationPropertiesDto } from '../../../proxy/combined-lane-items/models';
import { CombinedLaneItemViewService } from '../services/combined-lane-item.service';
import { CombinedLaneItemDetailViewService } from '../services/combined-lane-item-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractCombinedLaneItemComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(CombinedLaneItemViewService);
  public readonly serviceDetail = inject(CombinedLaneItemDetailViewService);
  protected title = '::CombinedLaneItems';

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

  update(record: CombinedLaneItemWithNavigationPropertiesDto) {
    this.serviceDetail.update(record);
  }

  delete(record: CombinedLaneItemWithNavigationPropertiesDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
