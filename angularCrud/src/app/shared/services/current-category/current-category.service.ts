import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryService {

  private currentCategory$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getCategory(): Observable<string> {
    return this.currentCategory$;
  }
  setCurrentCategory(category: string) {
    this.currentCategory$.next(category);
  }
}
