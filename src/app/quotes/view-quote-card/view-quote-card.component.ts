import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

import { QuoteService } from '../quote.service';
import { Quote } from './../interfaces/IQuote';

@Component({
  selector: 'app-view-quote-card',
  templateUrl: './view-quote-card.component.html',
  styleUrls: ['./view-quote-card.component.scss']
})
export class ViewQuoteCardComponent implements OnInit {
  @Input() viewQuote!: Quote;

  constructor(
    public dialog: MatDialog,
    private quoteService: QuoteService) { }

  ngOnInit(): void {
  }
  onDelete(quote: Quote) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe((x) => {
      if (x) {
        this.deleteQuote(quote.id)
      }
    })
  }
  deleteQuote(id: number) {
    this.quoteService.delete(id).subscribe(() => { });
  }
}
