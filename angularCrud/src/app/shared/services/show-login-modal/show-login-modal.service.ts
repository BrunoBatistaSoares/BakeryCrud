import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowLoginModalService {
  showModal$ = new BehaviorSubject<string>('');
  constructor() { }

  getShowModal(): Observable<string> {
    return this.showModal$;
  }

  setShowModal(show: string) {
    this.showModal$.next(show);
  }
}
