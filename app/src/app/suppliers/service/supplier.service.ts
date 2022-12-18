import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supplier } from '../interfaces/ISupplier';
const url = `${environment.url}/suppliers`
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(url);
  }
  getById(id: number) {
    return this.http.get<Supplier>(`${url}/${id}`)
  }
  updateSupplier(supplier: Supplier) {
    return this.http.put(`${url}/${supplier.id}`, supplier)
  }
  createSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(url, supplier);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
