import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/resources/product';
import { CurrentCategoryService } from 'src/app/shared/services/current-category/current-category.service';
import { ItemService } from 'src/app/shared/services/item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products$: Observable<Product[]> = new Observable<Product[]>;
  private categoryObserver = {
    next: (category: string) => {
      if (category === '') {
        this.products$ = this.itemService.getAllItems();
      }
      else {
        this.products$ = this.itemService.getItemsByCategory(category);
      }
    },
    error: (err: Error) => { console.error(err) },
  };


  constructor(private itemService: ItemService, private currentCategoryService: CurrentCategoryService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.currentCategoryService.getCategory().subscribe(this.categoryObserver);
  }

  categoryClickHandler(category: string) {
    this.currentCategoryService.setCurrentCategory(category)
  }

}

