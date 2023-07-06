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
  private signUpEndpoint = 'user'
  private currentUser$: BehaviorSubject<User | null>;

  constructor(private httpClient: HttpClient) {
    this.currentUser$ = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!))
  }

  login(user: User): Observable<User> {
    console.log(user);

    return this.httpClient.post<User>(`${this.baseURL}/${this.loginEndpoint}`, user).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
      console.log(localStorage.getItem('currentUser'));
      return user;
    }));
  }

  signUp(newUser: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/${this.signUpEndpoint}`, newUser).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
      console.log(localStorage.getItem('currentUser'));
      return user;
    }));
  };


  getCurrentUser(): BehaviorSubject<User | null> {
    return this.currentUser$;
  }


}
