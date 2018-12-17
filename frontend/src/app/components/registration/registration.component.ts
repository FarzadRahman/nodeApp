import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
}) 
export class RegistrationComponent implements OnInit {
  name='';
  email='';
  password='';
  password1='';
  isSeller=false;
  btnDisabled=false;

  constructor(private router:Router,private data:DataService,private api:RestApiService) { }

  ngOnInit() {
  }

}
