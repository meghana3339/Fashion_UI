import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../Models/user';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class registerComponent {
  user: User;
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }
  register() {
    this.http
      .post('http://localhost:5254/api/User/Register', this.user)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('register'); 
  }

}