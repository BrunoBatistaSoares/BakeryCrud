import { Component, Input } from '@angular/core';
import { Product } from '../resources/product';

@Component({
  selector: 'app-listed-product',
  templateUrl: './listed-product.component.html',
  styleUrls: ['./listed-product.component.css']
})
export class ListedProductComponent {
  @Input() product!: Product;
}


