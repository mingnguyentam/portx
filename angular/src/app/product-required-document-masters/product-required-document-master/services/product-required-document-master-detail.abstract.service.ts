import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService, TrackByService } from '@abp/ng.core';

import { finalize, tap } from 'rxjs/operators';

import type { ProductRequiredDocumentMasterWithNavigationPropertiesDto } from '../../../proxy/product-required-document-masters/models';
import { ProductRequiredDocumentMasterService } from '../../../proxy/product-required-document-masters/product-required-document-master.service';

export abstract class AbstractProductRequiredDocumentMasterDetailViewService {
  protected readonly fb = inject(FormBuilder);
  protected readonly track = inject(TrackByService);

  public readonly proxyService = inject(ProductRequiredDocumentMasterService);
  public readonly list = inject(ListService);

  public readonly getProductLookup = this.proxyService.getProductLookup;

  public readonly getRequiredDocumentLookup = this.proxyService.getRequiredDocumentLookup;

  isBusy = false;
  isVisible = false;
  selected = {} as any;
  form: FormGroup | undefined;

  protected createRequest() {
    const formValues = {
      ...this.form.value,
    };

    if (this.selected) {
      return this.proxyService.update(this.selected.productRequiredDocumentMaster.id, {
        ...formValues,
        concurrencyStamp: this.selected.productRequiredDocumentMaster.concurrencyStamp,
      });
    }

    return this.proxyService.create(formValues);
  }

  buildForm() {
    const { productId, requiredDocumentId } = this.selected?.productRequiredDocumentMaster || {};

    this.form = this.fb.group({
      productId: [productId ?? null, []],
      requiredDocumentId: [requiredDocumentId ?? null, []],
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

  update(record: ProductRequiredDocumentMasterWithNavigationPropertiesDto) {
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
