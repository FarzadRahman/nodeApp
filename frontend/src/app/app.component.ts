import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}


  logout() {
    console.log(localStorage.getItem('token'));
    // alert("Logout");
    localStorage.clear();
    this.router.navigate(['']);
  }

  isLogin(){
    if (localStorage.getItem('token')==null){
      return false;
    }
    return true;
  }
}
