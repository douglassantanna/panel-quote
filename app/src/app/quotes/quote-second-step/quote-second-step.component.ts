import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Quote } from '../interfaces/IQuote';

@Component({
  selector: 'app-quote-second-step',
  templateUrl: './quote-second-step.component.html',
  styleUrls: ['./quote-second-step.component.scss']
})
export class QuoteSecondStepComponent implements OnInit {
  @Input() quoteFirstStep!: Quote;
  @Output() onSecondFormQuoteGroupChange = new EventEmitter();
  quote: FormGroup = {} as FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quote = this.fb.group({
      paymentMethod: [''],
    });
    this.quote.valueChanges.subscribe(() => this.onSecondFormQuoteGroupChange.emit(this.quote.value));
  }

}
