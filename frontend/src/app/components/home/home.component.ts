import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sliderImages=[];

  constructor() { }

  ngOnInit() {
    this.sliderImages=['https://www.w3schools.com/bootstrap4/la.jpg',
    'https://www.w3schools.com/bootstrap4/chicago.jpg',
    'https://www.w3schools.com/bootstrap4/ny.jpg'];
  }

}
