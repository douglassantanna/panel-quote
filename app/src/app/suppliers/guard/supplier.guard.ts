import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewSupplier } from '../interfaces/ISupplier';
import { SupplierService } from '../service/supplier.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierGuard implements Resolve<NewSupplier> {
  constructor(private supplierService: SupplierService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewSupplier> {
    if (route.params && route.params['id']) {
      return this.supplierService.getById(route.params['id'])
    } else {
      return of({
        name: '',
        internalResponsable: '',
        phoneNumber: '',
        description: '',
        email: '',
        address: {
          street: '',
          number: '',
          zipcode: '',
          neighborhood: '',
          city: '',
          country: ''
        }
      })
    }
  }
}
