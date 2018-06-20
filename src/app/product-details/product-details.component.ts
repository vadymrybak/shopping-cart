import { Component, OnInit, Input } from '@angular/core';
import Product from '../models/Product';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product;
  loading: boolean = true;

  constructor(private cartService: CartService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('productId');
    const product$ = this.dataService.getItemById(id).subscribe(product => {
      this.loading = false;
      this.product = product;
    });
  }

  addToCard() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['']);
  };

}
