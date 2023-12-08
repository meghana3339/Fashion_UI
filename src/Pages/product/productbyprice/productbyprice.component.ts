import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productbyprice',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './productbyprice.component.html',
  styleUrl: './productbyprice.component.css'
})
export class ProductbypriceComponent {
  price?: number = 0;
  product: Product;
  errMsg: string = '';
  isProductExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.product = new Product();
  
    this.activateRoute.params.subscribe((p) => (this.price = p['price']));
    console.log(this.price);
    this.search();
  }

search() {
  this.http
    .get<Product>(
      'http://localhost:5140/api/Product/GetproductbyId/' + this.price
    )
    .subscribe((response) => {
      console.log(response);
      if (response != null) {
        this.product = response;
        this.isProductExist = true;
        this.errMsg = '';
      } else {
        this.errMsg = 'No Product Exist For Given price';
        this.isProductExist = false;
      }
    });
}
edit() {
  this.http
    .put('http://localhost:5140/api/Product/EditProduct', this.product)
    .subscribe((response) => {
      console.log(response);
    });
  this.roter.navigateByUrl('get');
}
delete() {
  this.price = this.product.price;
  this.http
    .delete('http://localhost:5140/api/Product/DeleteProduct/' + this.price)
    .subscribe((response) => {
      console.log(response);
    });
  this.roter.navigateByUrl('get');
  }



}


