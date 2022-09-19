import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  goToDetails(id: number){
    this.router.navigateByUrl("/details/" + id);
}
}
