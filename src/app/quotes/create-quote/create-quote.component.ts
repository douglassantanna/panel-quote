import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from './../../customers/interfaces/ICustomer';
import { Quote } from './../interfaces/IQuote';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {
  customer: Customer = {} as Customer;
  customerForm: FormGroup = {} as FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.customerForm = this._formBuilder.group({
      id: [''],
      panelWidth: [''],
      panelHeigth: [''],
      panelColor: [''],
      fontColor: [''],
      fontSize: [''],
      fontType: [''],
      textArea: [''],
      paymentMethod: [''],
    });
  }
  onFormCustomerGroupChangeEvent(customer: Customer) {
    this.customerForm.patchValue({
      id: customer.id,
    })
  }

  onFormQuoteGroupChangeEvent(quote: Quote) {
    this.customerForm.patchValue({
      panelWidth: quote.panelWidth,
      panelHeigth: quote.panelHeigth,
      panelColor: quote.panelColor,
      fontColor: quote.fontColor,
      fontSize: quote.fontSize,
      fontType: quote.fontType,
      textArea: quote.textArea,
    })
  }

  onSecondFormQuoteGroupChangeEvent(quote: Quote) {
    this.customerForm.patchValue({
      paymentMethod: quote.paymentMethod,
    })
  }
  onSubmit() {
    this.quoteService.createQuote(this.customerForm.value).subscribe({
      next: () => this.router.navigate(["/"])
    });

  }
}
