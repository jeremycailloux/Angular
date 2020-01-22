import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false;

  private user = new User('c','a','c.a','aa');

  constructor(private router: Router, private userService: UserService) { }

  login(email:string, password:string){
    const user = this.userService.getUser();

    if(user && user.email === email && user.password === password){
      this.isAuth = true;
      this.router.navigate(['/album']);
    }
    
  }

  logout(){
    this.isAuth = false;

    this.router.navigate(['/login']);
  }

  isAuthenticated(){
    return this.isAuth;
  }
}
