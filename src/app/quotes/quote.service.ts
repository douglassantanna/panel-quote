import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from './interfaces/IQuote';
const url = `${environment.url}/quotes`
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private http: HttpClient) { }
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(url);
  }
  getById(id: number) {
    return this.http.get<Quote>(`${url}/${id}`)
  }
  updateQuote(quote: Quote) {
    return this.http.put(`${url}/${quote.id}`, quote)
  }
  createQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(url, quote);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
