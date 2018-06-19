import { Component, OnInit } from '@angular/core';
import Cart from './models/Cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart Demo';
  cart: Cart;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log("cart: ", this.cart);
  }
}
