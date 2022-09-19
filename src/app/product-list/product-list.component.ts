import { Component, OnInit } from '@angular/core';
import Product from '../models/product';
import ProductService from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.get().subscribe(response =>
      {
        this.products = response as Product[];
      });
  }

  onItemDeleteHandler(id: any){
    this.products=this.products.filter(product => product.id != id);
  }

  addNewItemHandler(product: any){
    this.products.push(product);
  }

  sortByName() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByPrice() {
      this.products.sort((a, b) => a.price - b.price);
  }
}