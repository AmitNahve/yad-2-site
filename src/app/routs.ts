import { RouterModule, Routes, } from "@angular/router";
import { AddNewComponent } from "./product-list/add-new/add-new.component";
import { ProductDetailsComponent } from "./product-list/product-details/product-details.component";
import { ProductEditorComponent } from "./product-list/product-editor/product-editor.component";
import { ProductListComponent } from "./product-list/product-list.component";

const appRouters: Routes = [
    { path: "", component: ProductListComponent },
    // { path: "about", component: AboutComponent },
    { path: "new", component: AddNewComponent },
    { path: "edit/:id", component: ProductEditorComponent },
    { path: "details/:id", component: ProductDetailsComponent }
];
    export const routing = RouterModule.forRoot(appRouters);