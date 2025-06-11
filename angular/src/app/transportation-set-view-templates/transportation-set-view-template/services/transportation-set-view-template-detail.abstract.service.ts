import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { TransportationSetViewTemplateDto } from '../../../proxy/transportation-set-view-templates/models';
import { TransportationSetViewTemplateService } from '../../../proxy/transportation-set-view-templates/transportation-set-view-template.service';

export abstract class AbstractTransportationSetViewTemplateDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(TransportationSetViewTemplateService);
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
    const { name, description, data, rootId, transportationSetRootId } = this.selected || {};

    this.form = this.fb.group({
      name: [name ?? null, []],
      description: [description ?? null, []],
      data: [data ?? null, []],
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

  update(record: TransportationSetViewTemplateDto) {
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
