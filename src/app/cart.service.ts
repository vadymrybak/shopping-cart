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
    if (localStorage.getItem("cart") !== null) {
      let localStorageCart: Cart = JSON.parse(localStorage.getItem('cart'));
      this.cart.products = localStorageCart.products;
      this.cart.grand_total = localStorageCart.grand_total;
      this.cart.gst_hst = localStorageCart.gst_hst;
      this.cart.sub_total = localStorageCart.sub_total;
    }
  }

  // Adds a product to a cart
  addToCart(product: Product): void {
    if (this.cart.products.filter(this_product => this_product.id === product.id).length > 0){
      this.cart.products.find(this_product => this_product.id === product.id).quantity++;
      this.cart.calculateCart();
    }
    else{
      product.quantity = 1;
      this.cart.addToCart(product);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Get all products in a cart
  getCart(): Cart {
    return this.cart;
  };

  // Deletes a product from a cart
  deleteFromCart(id: number): void {

  };
}
