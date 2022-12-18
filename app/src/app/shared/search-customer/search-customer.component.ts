import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { Customer } from 'src/app/customers/interfaces/ICustomer';
import { CustomerService } from 'src/app/customers/service/customer.service';

import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {
  @Input() customerForm!: Customer;
  @Output() onFormCustomerGroupChange = new EventEmitter();
  myControl = new FormControl<string | Customer>('');
  filteredCustomers!: Observable<Customer[]>;
  customer: FormGroup = {} as FormGroup;
  dataSource: Customer[];
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.customer = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
    });

    this.customer.valueChanges.subscribe(() => this.onFormCustomerGroupChange.emit(this.customer.value));
    this.getCustomers();
    this.customerFilter();

  }
  private customerFilter() {
    this.filteredCustomers = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.dataSource.slice();
      }));
  }

  errorMsg(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((x) => {
      this.dataSource = x;
    });
  }

  displayFn(customers: Customer[]): (id: number) => string {
    return (id: number) => {
      const opt = Array.isArray(this.dataSource)
        ? customers.find((x) => x.id === id)
        : null;
      return opt ? opt.name : '';
    };
  }
  private _filter(value: string): Customer[] {
    const filterValue = value.toLowerCase();
    return this.dataSource.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  populateForm(id: any) {
    this.customerService.getById(id).subscribe((customer: Customer) => {
      this.customer.patchValue({
        id: customer.id,
        // name: customer.name //não passar o nome, senão o input se esvazia, perde o nome
      })
    })

  }
}
