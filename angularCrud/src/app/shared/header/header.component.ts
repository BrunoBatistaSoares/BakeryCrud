import { Component } from '@angular/core';
import { CurrentCategoryService } from '../services/current-category/current-category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private currentCategoryService: CurrentCategoryService) { }

  categoryClickHandler(category: string) {
    this.currentCategoryService.setCurrentCategory(category)
  }
}
