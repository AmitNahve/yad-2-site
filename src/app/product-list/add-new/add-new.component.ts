import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import ProductService from 'src/app/services/product.service';
import { ValidateImage } from 'src/app/validators/image.validator';
import { ValidateUrl } from 'src/app/validators/url.validator';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  product: Product;
  constructor(private productService:ProductService , private router: Router) { 
    this.product= new Product(0,"","","","",0,new Date(),"")
  }
  newItemForm: FormGroup = new FormGroup({
    name: new FormControl("", 
    [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    city: new FormControl("", [Validators.required]),
    contactPhone: new FormControl("", [Validators.required ,Validators.pattern("^[0-9]*$"),
    Validators.minLength(10), Validators.maxLength(10)]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    imageUrl: new FormControl("",[Validators.required,Validators.pattern('https?:\/\/.*\.(?:png|jpg|jpeg|jfif)')])
  });
  ngOnInit(): void {
  }
  saveForm() {
    let name = this.newItemForm.controls["name"].value;
    let city = this.newItemForm.controls["city"].value;
    let description = this.newItemForm.controls["description"].value;
    let contactPhone = this.newItemForm.controls["contactPhone"].value;
    let price = this.newItemForm.controls["price"].value;
    let imageUrl = this.newItemForm.controls["imageUrl"].value;
    let nowDate= new Date();
    this.product = new Product(0,name,city,description,contactPhone,price,nowDate,imageUrl)
    if(this.newItemForm.valid){
    this.productService.post(this.product)
      .subscribe(data => {
        this.router.navigateByUrl("");
      })
    }
  }
  addItemHandler(form: any){
    if(form.form.invalid){
      alert("Please fix form")
    }
    else {
      this.productService.post(this.product)
                      .subscribe(data=>{
                          // this.onnew.emit(data);
                          // this.newTask = new Task();
                          this.router.navigateByUrl("/list");
                      })
      }
}

}
