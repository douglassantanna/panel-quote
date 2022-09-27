import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { Quote } from '../interfaces/IQuote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes!: Quote[];
  constructor(
    private quoteService: QuoteService,
    private dialog: MatDialog
  ) {
    this.getQuotes();
  }

  private getQuotes() {
    this.quoteService.getQuotes().subscribe({
      next: (quotes) => this.quotes = quotes,
      error: () => this.errorMsg('Erro ao carregar orçamentos!')
    });
  }
  ngOnInit(): void {
  }
  errorMsg(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
