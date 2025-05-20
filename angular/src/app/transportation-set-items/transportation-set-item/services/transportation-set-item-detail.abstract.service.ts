import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { TransportationSetItemDto } from '../../../proxy/transportation-set-items/models';
import { TransportationSetItemService } from '../../../proxy/transportation-set-items/transportation-set-item.service';

export abstract class AbstractTransportationSetItemDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(TransportationSetItemService);
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
    const {
      name,
      type,
      attributes,
      order,
      category,
      isActive,
      isDefault,
      rootId,
      transportationSetRootId,
    } = this.selected || {};

    this.form = this.fb.group({
      name: [name ?? null, []],
      type: [type ?? null, []],
      attributes: [attributes ?? null, []],
      order: [order ?? '0', [Validators.required]],
      category: [category ?? null, []],
      isActive: [isActive ?? true, []],
      isDefault: [isDefault ?? false, []],
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

  update(record: TransportationSetItemDto) {
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
