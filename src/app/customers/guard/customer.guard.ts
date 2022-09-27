import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { NewCustomer } from '../interfaces/ICustomer';
import { CustomerService } from '../service/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements Resolve<NewCustomer> {
  constructor(private customerService: CustomerService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewCustomer> {
    if (route.params && route.params['id']) {
      return this.customerService.getById(route.params['id'])
    } else {
      return of({
        name: '',
        phoneNumber: '',
        email: ''
      })
    }
  }
}
