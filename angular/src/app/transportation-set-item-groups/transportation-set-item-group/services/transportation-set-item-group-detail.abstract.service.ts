import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { TransportationSetItemGroupDto } from '../../../proxy/transportation-set-item-groups/models';
import { TransportationSetItemGroupService } from '../../../proxy/transportation-set-item-groups/transportation-set-item-group.service';

export abstract class AbstractTransportationSetItemGroupDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(TransportationSetItemGroupService);
  public readonly list = inject(ListService);

  isBusy = false;
  isVisible = false;
  selected = {} as any;
  form: FormGroup | undefined;

  protected createRequest() {
    const formValues = {
      ...this.form.value,
    };

    if (this.selected) {
      return this.proxyService.update(this.selected.id, {
        ...formValues,
        concurrencyStamp: this.selected.concurrencyStamp,
      });
    }

    return this.proxyService.create(formValues);
  }

  buildForm() {
    const { name, order, type, rootId, transportationSetRootId } = this.selected || {};

    this.form = this.fb.group({
      name: [name ?? null, []],
      order: [order ?? null, []],
      type: [type ?? null, []],
      rootId: [rootId ?? null, []],
      transportationSetRootId: [transportationSetRootId ?? null, []],
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

  update(record: TransportationSetItemGroupDto) {
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
