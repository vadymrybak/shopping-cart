import { Component, OnInit, Input } from '@angular/core';
import Product from '../models/Product';
import { DataService } from '../data.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('productId');
    console.log("id", id);
    const product$ = this.dataService.getItemById(id).subscribe(product => {
      this.product = product;
    });
  }

}
