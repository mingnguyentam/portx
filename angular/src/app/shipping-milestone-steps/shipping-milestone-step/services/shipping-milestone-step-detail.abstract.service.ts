import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ShippingMilestoneStepDto } from '../../../proxy/shipping-milestone-steps/models';
import { ShippingMilestoneStepService } from '../../../proxy/shipping-milestone-steps/shipping-milestone-step.service';

export abstract class AbstractShippingMilestoneStepDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ShippingMilestoneStepService);
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
      category,
      order,
      businessTypeId,
      supplierId,
      supplierTeamId,
      isRequiredApproval,
      approverId,
      rootId,
      shippingMilestoneRootId,
      shippingWorkflowRootId,
      supplierTenantId,
    } = this.selected || {};

    this.form = this.fb.group({
      name: [name ?? null, []],
      type: [type ?? null, []],
      category: [category ?? null, []],
      order: [order ?? '0', [Validators.required]],
      businessTypeId: [businessTypeId ?? null, []],
      supplierId: [supplierId ?? null, []],
      supplierTeamId: [supplierTeamId ?? null, []],
      isRequiredApproval: [isRequiredApproval ?? false, []],
      approverId: [approverId ?? null, []],
      rootId: [rootId ?? null, []],
      shippingMilestoneRootId: [shippingMilestoneRootId ?? null, []],
      shippingWorkflowRootId: [shippingWorkflowRootId ?? null, []],
      supplierTenantId: [supplierTenantId ?? null, []],
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

  update(record: ShippingMilestoneStepDto) {
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
