import { Component, OnInit, Input } from '@angular/core';
import Product from '../models/Product';
import Cart from '../models/Cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  // Adds product to a cart
  addToCard(){
    this.cartService.addToCart(this.product);
  };

}
