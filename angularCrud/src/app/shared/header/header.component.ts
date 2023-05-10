import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';
import { ShowModalService } from '../services/show-modal/show-modal.service';
import { ModalEnum } from '../resources/modal-enum';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private showModalService: ShowModalService, private userService: UserService) { }

  login() {
    this.showModalService.setModal(ModalEnum.Login);
  }

  signUp() {
    this.showModalService.setModal(ModalEnum.SignUp);
    console.log(ModalEnum.SignUp);

  }

  reload() { window.location.reload(); }

  test() {
    this.userService.login('aa@aa.aa', 'asdASD123').subscribe();
  }
}
