import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/ICustomer';
const url = `${environment.url}/customers`

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(url).pipe(
      shareReplay()
    );
  }
  getById(id: number) {
    return this.http.get<Customer>(`${url}/${id}`)
  }
  updateCustomer(customer: Customer) {
    return this.http.put(`${url}/${customer.id}`, customer)
  }
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(url, customer);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
