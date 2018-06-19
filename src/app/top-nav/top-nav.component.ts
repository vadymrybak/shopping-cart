import { Component, OnInit, Input } from '@angular/core';
import Cart from '../models/Cart';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input() cart: Cart;

  constructor() { }

  ngOnInit() {
    console.log("top nav cart: ", this.cart);
  }

}
