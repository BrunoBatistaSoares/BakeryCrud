import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../../resources/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:4000';
  private loginEndpoint = 'user/auth'
  private currentUser$: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUser$ = new BehaviorSubject(JSON.parse(localStorage.getItem('currenUser')!))
  }

  login(emailAuth: string, passwordAuth: string) {
    const user = new User;
    user.email = emailAuth;
    user.password = passwordAuth;
    return this.httpClient.post<User>(`${this.baseURL}/${this.loginEndpoint}`, user).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
      console.log(user);

      return user;
    }));
  }

  // login() {
  //   return this.httpClient.post()
  // }
}
