import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalEnum } from '../../resources/modal-enum';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {
  private modal$ = new BehaviorSubject<ModalEnum>(ModalEnum.Closed);
  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getModal(): BehaviorSubject<ModalEnum> {
    return this.modal$;
  }

  setModal(modal: ModalEnum) {
    this.modal$.next(modal);
  }

  getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading$;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
  }
}
