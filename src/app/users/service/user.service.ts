import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';
const url = `${environment.url}/users`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getByEmail(email: string) {
    return this.http.get<User>(`${url}/${email}`)
  }
  getById(id: number) {
    return this.http.get<User>(`${url}/${id}`)
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(url, user);
  }
  updateUser(user: User) {
    return this.http.put(`${url}/${user.id}`, user)
  }
}
