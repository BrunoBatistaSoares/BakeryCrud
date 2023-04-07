import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/shared/resources/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = PRODUCTS;
}
