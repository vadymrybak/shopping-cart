import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Product from '../models/Product';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.css']
})
export class PedalsComponent implements OnInit {

  products: Array<Product>;
  loading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const pedals$ = this.dataService.getProducts("pedals").subscribe(result => {
      this.loading = false;
      this.products = result
    });
  }

}
