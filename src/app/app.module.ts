import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import ProductService from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductEditorComponent } from './product-list/product-editor/product-editor.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { AddNewComponent } from './product-list/add-new/add-new.component';
import { routing } from './routs';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { InputDirectivDirective } from './directives/input-directiv.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditorComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    AddNewComponent,
    MyHighlightDirective,
    InputDirectivDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
