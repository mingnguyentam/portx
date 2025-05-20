import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ShippingHistoryDto } from '../../../proxy/shipping-histories/models';
import { ShippingHistoryService } from '../../../proxy/shipping-histories/shipping-history.service';

export abstract class AbstractShippingHistoryDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ShippingHistoryService);
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
    const { creatorName, creatorEmail, type, data, extraData, shippingRootId, isCreatedByOwner } =
      this.selected || {};

    this.form = this.fb.group({
      creatorName: [creatorName ?? null, []],
      creatorEmail: [creatorEmail ?? null, []],
      type: [type ?? null, []],
      data: [data ?? null, []],
      extraData: [extraData ?? null, []],
      shippingRootId: [shippingRootId ?? null, []],
      isCreatedByOwner: [isCreatedByOwner ?? false, []],
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

  update(record: ShippingHistoryDto) {
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
