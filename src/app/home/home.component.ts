import { Component } from '@angular/core';
import {  HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http: HttpClient) {

  }

}
