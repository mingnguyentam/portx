import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { CombinedLaneItemWithNavigationPropertiesDto } from '../../../proxy/combined-lane-items/models';
import { CombinedLaneItemService } from '../../../proxy/combined-lane-items/combined-lane-item.service';

export abstract class AbstractCombinedLaneItemDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(CombinedLaneItemService);
  public readonly list = inject(ListService);

  public readonly getCombinedLaneLookup = this.proxyService.getCombinedLaneLookup;

  public readonly getLaneLookup = this.proxyService.getLaneLookup;

  isBusy = false;
  isVisible = false;
  selected = {} as any;
  form: FormGroup | undefined;

  protected createRequest() {
    const formValues = {
      ...this.form.value,
    };

    if (this.selected) {
      return this.proxyService.update(this.selected.combinedLaneItem.id, {
        ...formValues,
        concurrencyStamp: this.selected.combinedLaneItem.concurrencyStamp,
      });
    }

    return this.proxyService.create(formValues);
  }

  buildForm() {
    const { order, combinedLaneId, laneId } = this.selected?.combinedLaneItem || {};

    this.form = this.fb.group({
      order: [order ?? '0', [Validators.required]],
      combinedLaneId: [combinedLaneId ?? null, []],
      laneId: [laneId ?? null, []],
    });
  }

  showForm() {
    this.buildForm();
    this.isVisible = true;
  }

  create() {
    this.selected = undefined;
    this.showForm();
  }

  update(record: CombinedLaneItemWithNavigationPropertiesDto) {
    this.selected = record;
    this.showForm();
  }

  hideForm() {
    this.isVisible = false;
  }

  submitForm() {
    if (this.form.invalid) return;

    this.isBusy = true;

    const request = this.createRequest().pipe(
      finalize(() => (this.isBusy = false)),
      tap(() => this.hideForm()),
    );

    request.subscribe(this.list.get);
  }

  changeVisible($event: boolean) {
    this.isVisible = $event;
  }
}
