import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

import { CartService } from '../service/cart.service';


import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatButtonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  public products: any[] = [];
  constructor (private _productService: ProductService,
    public cartService: CartService

  ) {

  }

  ngOnInit() {
      this._productService.getProducts()
        .subscribe((data:any) => {
          this.products = data.products;

          console.log(data.products, '________ Data ________')
        });
  }

  addToCart(product:any) {
    console.log(product, '________ product ________')
    this.cartService.addToCart(product);
  }
}
