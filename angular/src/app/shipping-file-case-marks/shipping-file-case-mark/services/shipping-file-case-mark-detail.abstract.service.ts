import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ShippingFileCaseMarkWithNavigationPropertiesDto } from '../../../proxy/shipping-file-case-marks/models';
import { ShippingFileCaseMarkService } from '../../../proxy/shipping-file-case-marks/shipping-file-case-mark.service';

export abstract class AbstractShippingFileCaseMarkDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ShippingFileCaseMarkService);
  public readonly list = inject(ListService);

  public readonly getShippingLookup = this.proxyService.getShippingLookup;

  isBusy = false;
  isVisible = false;
  selected = {} as any;
  form: FormGroup | undefined;

  protected createRequest() {
    const formValues = {
      ...this.form.value,
    };

    if (this.selected) {
      return this.proxyService.update(this.selected.shippingFileCaseMark.id, {
        ...formValues,
        concurrencyStamp: this.selected.shippingFileCaseMark.concurrencyStamp,
      });
    }

    return this.proxyService.create(formValues);
  }

  buildForm() {
    const { file, referenceTenantId, shippingInvoiceIds, extraData, type, content, shippingId } =
      this.selected?.shippingFileCaseMark || {};

    this.form = this.fb.group({
      file: [file ?? null, []],
      referenceTenantId: [referenceTenantId ?? null, []],
      shippingInvoiceIds: [shippingInvoiceIds ?? null, []],
      extraData: [extraData ?? null, []],
      type: [type ?? '0', [Validators.required]],
      content: [content ?? null, []],
      shippingId: [shippingId ?? null, []],
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

  update(record: ShippingFileCaseMarkWithNavigationPropertiesDto) {
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
