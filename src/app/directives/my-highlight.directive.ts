import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class MyHighlightDirective implements OnInit {
  // @Input() appHighlight="yellow";
  // @Input() errorColor="pink";
  
  @Input() appHighlight="";
  constructor(private el:ElementRef) {
   
  }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor = this.appHighlight;
    // this.el.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color = this.appHighlight;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color = 'black';
  }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.el.nativeElement.style.backgroundColor = this.errorColor;
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.el.nativeElement.style.backgroundColor = this.appHighlight;
  // }

  // @HostListener('input') onInput(){
  //   if(this.el.nativeElement.value){
  //     this.el.nativeElement.style.backgroundColor = this.errorColor;
  //   }
  //   else {
  //     this.el.nativeElement.style.backgroundColor = this.appHighlight;
  //   }
  // }


}
