import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {
  modal$ = new BehaviorSubject<string>('closed');
  isLoading$ = new BehaviorSubject<boolean>(false);
  showModal$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getModal(): BehaviorSubject<string> {
    return this.modal$;
  }

  setModal(show: string) {
    this.modal$.next(show);
    if (show != 'closed') {
      this.setShowModal(true);
    }
    console.log(this.modal$.value);
  }

  getShowModal(): BehaviorSubject<boolean> {
    return this.showModal$;
  }

  setShowModal(show: boolean) {
    this.showModal$.next(show);
    if (!show) {
      this.setModal('closed')
    }
    console.log(this.showModal$.value);
  }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading$;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
    console.log(this.isLoading$.value);
  }
}
