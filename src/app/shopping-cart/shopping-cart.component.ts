import { Component, OnInit } from '@angular/core';
import Cart from '../models/Cart';
import Product from '../models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  // Delete product from shopping cart
  deleteItem(product: Product){

  };
}
