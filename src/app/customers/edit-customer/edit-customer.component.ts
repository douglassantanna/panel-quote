import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Customer, NewCustomer } from '../interfaces/ICustomer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  underAge = new Date();
  startDate = new Date(1990, 0, 1);
  updateCustomer: Customer = {} as Customer;
  newCustomer: NewCustomer = {} as NewCustomer;
  viewCustomer: Customer = {} as Customer;
  customerForm: FormGroup = {} as FormGroup;
  title = 'Novo Cliente';

  constructor(
    @Inject(MAT_DIALOG_DATA) private x: Customer,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.x) {
      this.title = 'Editar Cliente';
      this.customerForm = this._formBuilder.group({
        id: [this.x.id],
        name: [this.x.name, [Validators.required]],
        email: [this.x.email, [Validators.required]],
        phoneNumber: [this.x.phoneNumber, [Validators.required]],
        birthDate: [this.x.birthDate, [Validators.required]]
      })
    } else {
      this.customerForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        birthDate: [''],
      })
    }
  }

  submit() {
    if (this.x) {
      this.updateCustomer.id = this.customerForm.value.id;
      this.updateCustomer.name = this.customerForm.value.name;
      this.updateCustomer.email = this.customerForm.value.email;
      this.updateCustomer.phoneNumber = this.customerForm.value.phoneNumber;
      this.updateCustomer.birthDate = this.customerForm.value.birthDate;
      return this.updateCustomer;
    }
    this.newCustomer.email = this.customerForm.value.email;
    this.newCustomer.name = this.customerForm.value.name;
    this.newCustomer.phoneNumber = this.customerForm.value.phoneNumber;
    this.newCustomer.birthDate = this.customerForm.value.birthDate;
    return this.newCustomer;
  }
  get birthDate() { return this.customerForm.get('birthDate') as FormControl }
  get name() { return this.customerForm.get('name') as FormControl }

}
