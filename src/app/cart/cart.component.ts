import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import {MatTableModule} from '@angular/material/table';

import { RouterOutlet, RouterLink, RouterLinkActive  } from '@angular/router';

interface Product {
  id: number;
  title: string;
  category: string;
  quantity: number;
  price: number;
  images: string[];
}


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule,
    RouterOutlet, 
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:any;
  totalAmount:any;
  quantity:Array<number> = [1];
  product_totalprice:any;
  product_price:any = [];

  constructor(public cartService: CartService) {
    
   }


  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.totalAmount = this.products.reduce((acc: number, product: Product) => {
      return acc + product.price * 1;
    }, 0);

    this.totalAmount = (Math.round(this.totalAmount * 100) / 100).toFixed(2);


  }

  removeItem(index:number) {

    this.cartService.items.splice(index, 1);
    this.ngOnInit();
  }

  addNumber(quantity:number, product_price:number, index:any) {
    
      this.ngOnInit();

  }
}
