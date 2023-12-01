import { Component } from '@angular/core';
import { Product } from '../../../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  products: Product;
  constructor(private http: HttpClient, private router: Router) {
    this.products = new Product();
  }
  addProduct() {
    this.http
      .post('http://localhost:5140/api/Product/AddProducts', this.products)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('get'); 
  }

}
