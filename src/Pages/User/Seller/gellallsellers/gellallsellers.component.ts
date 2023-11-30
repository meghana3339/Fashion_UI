import { Component } from '@angular/core';
import { Seller } from '../../../../Models/seller';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gellallsellers',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './gellallsellers.component.html',
  styleUrl: './gellallsellers.component.css'
})
export class GellallsellersComponent {
  seller: Seller[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getAllsellers();
  }
  getAllsellers() {
    this.http
      .get<Seller[]>('http://localhost:64257/api/Movie/GetAllMovies')
      .subscribe((response) => {
        this.seller = response;
        console.log(this.seller);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllsellers(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }

}



