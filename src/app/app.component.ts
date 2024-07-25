import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive  } from '@angular/router';
import {MatListModule} from '@angular/material/list';


import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,   
    MatListModule
     
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce Shop';
}
