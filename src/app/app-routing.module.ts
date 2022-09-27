import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers/customers.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomerGuard } from './customers/guard/customer.guard';
import { CreateQuoteComponent } from './quotes/create-quote/create-quote.component';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { SupplierGuard } from './suppliers/guard/supplier.guard';
import { SuppliersComponent } from './suppliers/suppliers/suppliers.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'new-supplier', component: EditSupplierComponent, resolve: { supplier: SupplierGuard } },
  { path: 'edit-supplier/:id', component: EditSupplierComponent, resolve: { supplier: SupplierGuard } },
  { path: 'customers', component: CustomersComponent },
  { path: 'new-customer', component: EditCustomerComponent, resolve: { customer: CustomerGuard } },
  { path: 'edit-customer/:id', component: EditCustomerComponent, resolve: { customer: CustomerGuard } },
  { path: 'create-quote', component: CreateQuoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
