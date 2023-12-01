import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Models/user';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  user: User;
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }
  addUser() {
    this.http
      .post('http://localhost:64257/api/Movie/AddMovie', this.user)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getall'); 
  }

}