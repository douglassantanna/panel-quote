import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quote } from '../interfaces/IQuote';

@Component({
  selector: 'app-quote-first-step',
  templateUrl: './quote-first-step.component.html',
  styleUrls: ['./quote-first-step.component.scss']
})
export class QuoteFirstStepComponent implements OnInit {
  @Input() quoteFirstStep!: Quote;
  @Output() onFormQuoteGroupChange = new EventEmitter();
  quote: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quote = this.fb.group({
      panelWidth: [''],
      panelHeigth: [''],
      panelColor: [''],
      fontColor: [''],
      fontSize: [''],
      fontType: [''],
      textArea: [''],
    });
    this.quote.valueChanges.subscribe(() => this.onFormQuoteGroupChange.emit(this.quote.value));

  }

}
