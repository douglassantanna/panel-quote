import { Quote } from './../interfaces/IQuote';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-quote-card',
  templateUrl: './view-quote-card.component.html',
  styleUrls: ['./view-quote-card.component.scss']
})
export class ViewQuoteCardComponent implements OnInit {
  @Input() viewQuote!: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
