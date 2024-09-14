import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';


export const routes: Routes = [
    { path: 'home', component: ProductComponent },
    { path: 'product', component: ProductComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', component: NotfoundComponent }
  ];