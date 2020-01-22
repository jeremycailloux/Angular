import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isAuth = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    //FAIRE LE NGMODEL pour l'authentification
    this.isAuth = true
    this.authService.login()
  }

  logout(){
    this.isAuth = false
    this.authService.logout() 
  }

}
