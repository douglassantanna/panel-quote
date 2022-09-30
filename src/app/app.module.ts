import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CreateQuoteComponent } from './quotes/create-quote/create-quote.component';
import { QuotesComponent } from './quotes/quotes/quotes.component';
import { ViewQuoteCardComponent } from './quotes/view-quote-card/view-quote-card.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { SearchCustomerComponent } from './shared/search-customer/search-customer.component';
import { EditSupplierComponent } from './suppliers/edit-supplier/edit-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers/suppliers.component';
import { QuoteFirstStepComponent } from './quotes/quote-first-step/quote-first-step.component';
import { QuoteSecondStepComponent } from './quotes/quote-second-step/quote-second-step.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    SuppliersComponent,
    EditSupplierComponent,
    SearchCustomerComponent,
    EditCustomerComponent,
    CustomersComponent,
    CreateQuoteComponent,
    QuotesComponent,
    ViewQuoteCardComponent,
    QuoteFirstStepComponent,
    QuoteSecondStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
