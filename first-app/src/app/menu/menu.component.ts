import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'First app';
  user:User;
  isAvailable = false;
  userClass = 'red';
  userColor = 'red';
  userBoolean = true;
  text:string;

  isAuth:boolean;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.isAuth = this.authService.isAuthenticated();
  }

  getFormattedDate(){
    return new Date().toLocaleDateString();
  }

  searchText(event){
    console.log(event.target.value);
    this.text = event.target.value;
  }

  search(event){
    console.log('new search ' + this.text);
    event.preventDefault();
  }

  logout(){
    this.authService.logout();
    this.isAuth = this.authService.isAuthenticated();
  }
}
