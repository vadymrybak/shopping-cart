import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Product from '../models/Product';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  products: Array<Product>;
  loading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const pedals$ = this.dataService.getProducts("accessories").subscribe(result => {
      this.loading = false;
      this.products = result
    });
  }

}
