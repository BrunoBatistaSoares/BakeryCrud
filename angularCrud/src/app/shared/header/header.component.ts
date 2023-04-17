import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';
import { ShowModalService } from '../services/show-modal/show-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private currentCategoryService: CurrentCategoryService, private showModalService: ShowModalService) { }

  categoryClickHandler(category: string) {
    this.currentCategoryService.setCurrentCategory(category)
  }

  showModal(modal: string) {
    this.showModalService.setShowModal(modal);
  }
}
