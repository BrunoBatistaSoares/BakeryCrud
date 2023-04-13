import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../resources/product';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = 'http://localhost:4000';
  private getAllIemsEndpoint = 'products'
  constructor(private httpClient: HttpClient) { }


  getAllItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/${this.getAllIemsEndpoint}`);
  }

  getItemsByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}/${this.getAllIemsEndpoint}/${category}`);
  }
}
