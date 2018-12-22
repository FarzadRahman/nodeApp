import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }




  
}
