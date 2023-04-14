import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';
import { ShowLoginModalService } from '../services/show-login-modal/show-login-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private currentCategoryService: CurrentCategoryService, private showLoginModalService: ShowLoginModalService) { }

  categoryClickHandler(category: string) {
    this.currentCategoryService.setCurrentCategory(category)
  }

  showModal(modal: string) {
    this.showLoginModalService.setShowModal(modal);
  }
}
