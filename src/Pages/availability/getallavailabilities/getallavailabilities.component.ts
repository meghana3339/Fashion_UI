import { Component } from '@angular/core';
import { Availability } from '../../../Models/availability';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getallavailabilities',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getallavailabilities.component.html',
  styleUrl: './getallavailabilities.component.css'
})
export class GetallavailabilitiesComponent {
  availability: Availability[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getAllavailabilities();
  }
  getAllavailabilities() {
    this.http
      .get<Availability[]>('http://localhost:64257/api/Movie/GetAllMovies')
      .subscribe((response) => {
        this.availability = response;
        console.log(this.availability);
      });

}
getId(id: any) {
  this.router.navigateByUrl('search/' + id);
}
}
