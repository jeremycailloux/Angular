import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {

    if(!this.authService.isAuthenticated()){
      this.router.navigate(['/login']);
    }

    return this.authService.isAuthenticated();
  }
}
