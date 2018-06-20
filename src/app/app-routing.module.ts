import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { PedalsComponent } from './pedals/pedals.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full', 
    redirectTo: 'home'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent,
    children: [
        //{ path: '', pathMatch: 'full', redirectTo: 'guitars' },
        { path: 'guitars', component: GuitarsComponent },
        { path: 'pedals', component: PedalsComponent },
        { path: 'accessories', component: AccessoriesComponent }
    ]
  },
  {
    path: "details/:productId",
    component: ProductDetailsComponent
  },
  {
    path: "cart",
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
