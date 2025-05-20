import { Directive, OnInit, inject } from '@angular/core';

import { ListService, TrackByService } from '@abp/ng.core';

import type { CombinedLaneDto } from '../../../proxy/combined-lanes/models';
import { CombinedLaneViewService } from '../services/combined-lane.service';
import { CombinedLaneDetailViewService } from '../services/combined-lane-detail.service';

export const ChildTabDependencies = [];

export const ChildComponentDependencies = [];

@Directive({ standalone: true })
export abstract class AbstractCombinedLaneComponent implements OnInit {
  public readonly list = inject(ListService);
  public readonly track = inject(TrackByService);
  public readonly service = inject(CombinedLaneViewService);
  public readonly serviceDetail = inject(CombinedLaneDetailViewService);
  protected title = '::CombinedLanes';

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

  update(record: CombinedLaneDto) {
    this.serviceDetail.update(record);
  }

  delete(record: CombinedLaneDto) {
    this.service.delete(record);
  }

  exportToExcel() {
    this.service.exportToExcel();
  }
}
