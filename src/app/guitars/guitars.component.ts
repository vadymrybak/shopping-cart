import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Product from '../models/Product';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})
export class GuitarsComponent implements OnInit {

  products: Array<Product>;
  loading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const guitars$ = this.dataService.getProducts("guitars").subscribe(result => {
      this.loading = false;
      this.products = result
    });
  }

}
