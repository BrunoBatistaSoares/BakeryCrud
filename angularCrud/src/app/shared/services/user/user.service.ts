import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../resources/product';
import { User } from '../../resources/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:4000';
  private usersEndpoint = 'user'
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/${this.usersEndpoint}`);
  }

  getUsersByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${this.usersEndpoint}/${email}`);
  }

  newUser(body: Object) {

    return this.httpClient.post(`${this.baseURL}/${this.usersEndpoint}`, JSON.stringify(body));
  }
}
