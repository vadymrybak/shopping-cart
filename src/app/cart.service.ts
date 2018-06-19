import { Injectable } from '@angular/core';
import Cart from './models/Cart';
import Product from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;

  constructor() {
    this.cart = new Cart();
  }

  // Adds a product to a cart
  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }

  // Get all products in a cart
  getCart(): Cart {
    return this.cart;
  };

  // Deletes a product from a cart
  deleteFromCart(id: number): void {

  };
}
