import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ShippingWorkflowDto } from '../../../proxy/shipping-workflows/models';
import { ShippingWorkflowService } from '../../../proxy/shipping-workflows/shipping-workflow.service';

export abstract class AbstractShippingWorkflowDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ShippingWorkflowService);
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
      transportationType,
      mode,
      incoterms,
      isActive,
      conditionSettings,
      rootId,
      transportationSetRootId,
    } = this.selected || {};

    this.form = this.fb.group({
      name: [name ?? null, []],
      transportationType: [transportationType ?? null, []],
      mode: [mode ?? null, []],
      incoterms: [incoterms ?? null, []],
      isActive: [isActive ?? true, []],
      conditionSettings: [conditionSettings ?? null, []],
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

  update(record: ShippingWorkflowDto) {
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
