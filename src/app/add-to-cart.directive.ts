import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
declare let $ : any;

@Directive({
  selector: '[appAddToCart]'
})
export class AddToCartDirective {
  
  @Input() appAddToCart: string;

  @HostListener('click', ['$event']) onClick($event){
    $.notify(`${this.appAddToCart} was added to your cart`, {"globalPosition":"bottom right", "className" : "success"});
  }

  constructor(el: ElementRef, renderer: Renderer) {
    //console.log("directive running");
    //renderer.setElementStyle(el.nativeElement, 'display', 'none');
   }

}
