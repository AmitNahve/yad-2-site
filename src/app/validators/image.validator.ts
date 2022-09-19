import { AbstractControl } from "@angular/forms";

export function ValidateImage(control: AbstractControl){
    if(!control.value || control.value.endsWith('.jpeg') || control.value.endsWith('.png')){
        return null
    }
    else {
        return { validateUrl: "The image is not valid" }
    }
}