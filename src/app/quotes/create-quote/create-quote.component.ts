import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/suppliers/interfaces/ISupplier';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class CreateQuoteComponent implements OnInit {
  supplier: Supplier = {} as Supplier;
  form: FormGroup = {} as FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      address: this._formBuilder.group({})
    })
  }
}
