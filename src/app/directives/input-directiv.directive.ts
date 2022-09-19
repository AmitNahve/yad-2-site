import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputDirective]'
})
export class InputDirectivDirective {
@Input() inputDirective="";
  constructor(private el:ElementRef) { }
  @HostListener('change') onCahnge(){
    this.el.nativeElement.style.backgroundColor = this.inputDirective;
  }

}
