import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/models/product';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  product: Product = new Product(0,"","","","",0,undefined,"");
  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
  });
  this.productService.getById(this.id).subscribe(data => {
    this.product = data as Product
  })
}
deleteHandler() {
  this.productService.delete(this.product.id).subscribe(data => {
    this.ondelete.emit(this.product.id)
    this.router.navigateByUrl("");
  })
}

}
