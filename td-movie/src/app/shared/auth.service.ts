import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = true
  
  constructor(private router: Router) { }

  login(){
    this.isAuth = true
    this.router.navigate(['/user-list']) //Pour rediriger automatiquement
  }

  logout(){
    this.isAuth = false
  }

  isAuthenticated(){
    return this.isAuth
  }
}
