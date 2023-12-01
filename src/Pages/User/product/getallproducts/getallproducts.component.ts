import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../../../../Models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getallproducts',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getallproducts.component.html',
  styleUrl: './getallproducts.component.css'
})
export class GetallproductsComponent {
  products: Product[] = [];
  constructor(private http: HttpClient, private router: Router){

    this.getAllProducts();}
    getAllProducts() {
      
        this.http
          .get<Product[]>('http://localhost:5140/api/Product/GetAllProducts')
          .subscribe((response) => {
            this.products = response;
            console.log(this.products);
            this.getAllProducts();
          });

    }
  }
