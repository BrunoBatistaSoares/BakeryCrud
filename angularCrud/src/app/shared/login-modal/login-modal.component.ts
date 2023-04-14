import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowLoginModalService } from '../services/show-login-modal/show-login-modal.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent {
  showModal$ = new Observable<string>;

  constructor(private showLoginModalService: ShowLoginModalService) {
    this.showModal$ = showLoginModalService.getShowModal();
  }

  closeModal() {
    this.showLoginModalService.setShowModal('')
  }



}
