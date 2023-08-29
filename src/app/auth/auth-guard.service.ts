import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    environment.ipPort = localStorage.getItem('apiUrl')
    environment.apiUrl = localStorage.getItem('apiUrl') + '/api/'
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
