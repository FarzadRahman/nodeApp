import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GuestService } from './services/guest.service';

const routes: Routes = [
  {path: '', component:HomeComponent  },
  {path: 'register', component:RegistrationComponent,canActivate:[GuestService]},
  {path: 'login', component:LoginComponent,canActivate:[GuestService]},
  // {path: '**', redirectTo:''  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
