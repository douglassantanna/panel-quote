import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { Customer } from '../interfaces/ICustomer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  displayedColumns: string[] = ['name', 'phoneNumber', 'email', 'actions'];
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog) {
    this.getCustomers();
  }

  private getCustomers() {
    this.customers$ = this.customerService.getCustomers().pipe(
      catchError(error => {
        this.errorMsg('Erro ao carregar clientes!');
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }
  errorMsg(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  newCustomer() {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
    });
    dialogRef.afterClosed().pipe(switchMap((x: Customer) => {
      if (x == undefined) return of();
      return this.customerService.createCustomer(x);
    })).subscribe((x) => {
      this.getCustomers();
    })
  }
  editCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      data: customer
    });
    dialogRef.afterClosed().pipe(switchMap((x: Customer) => {
      if (x == undefined) return of();
      return this.customerService.updateCustomer(x);
    })).subscribe((x) => {
      this.getCustomers();
    })
  }
  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe((x) => {
      this.getCustomers();
    });
  }

}
