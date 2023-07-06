import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';
import { ShowModalService } from '../services/show-modal/show-modal.service';
import { ModalEnum } from '../resources/modal-enum';
import { UserService } from '../services/user/user.service';
import { User } from '../resources/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user?: User | null;

  constructor(private showModalService: ShowModalService, private userService: UserService) {
    this.userService.getCurrentUser().subscribe(value => {
      this.user = value;
      console.log(value);
    }
    );
  }

  login() {
    this.showModalService.setModal(ModalEnum.Login);
  }

  signUp() {
    this.showModalService.setModal(ModalEnum.SignUp);
  }

  reload() {
    //using this to check current user status
    console.log(this.user?.user_email);
    //re vert to this before build
    //window.location.reload(); 
  }
}
