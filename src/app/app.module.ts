import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { CartService } from './cart.service';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { PedalsComponent } from './pedals/pedals.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { LoaderComponent } from './loader/loader.component';
import { AddToCartDirective } from './add-to-cart.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    HomeComponent,
    ShoppingCartComponent,
    GuitarsComponent,
    PedalsComponent,
    AccessoriesComponent,
    ProductDetailsComponent,
    ProductComponent,
    LoaderComponent,
    AddToCartDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
