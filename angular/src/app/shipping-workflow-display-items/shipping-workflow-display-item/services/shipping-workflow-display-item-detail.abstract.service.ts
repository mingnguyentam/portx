import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ShippingWorkflowDisplayItemDto } from '../../../proxy/shipping-workflow-display-items/models';
import { ShippingWorkflowDisplayItemService } from '../../../proxy/shipping-workflow-display-items/shipping-workflow-display-item.service';

export abstract class AbstractShippingWorkflowDisplayItemDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ShippingWorkflowDisplayItemService);
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
      category,
      attributes,
      order,
      rootId,
      shippingMilestoneRootId,
      shippingMilestoneStepRootId,
      transportationSetRootId,
      transportationSetItemRootId,
    } = this.selected || {};

    this.form = this.fb.group({
      category: [category ?? null, []],
      attributes: [attributes ?? null, []],
      order: [order ?? '0', [Validators.required]],
      rootId: [rootId ?? null, []],
      shippingMilestoneRootId: [shippingMilestoneRootId ?? null, []],
      shippingMilestoneStepRootId: [shippingMilestoneStepRootId ?? null, []],
      transportationSetRootId: [transportationSetRootId ?? null, []],
      transportationSetItemRootId: [transportationSetItemRootId ?? null, []],
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

  update(record: ShippingWorkflowDisplayItemDto) {
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
