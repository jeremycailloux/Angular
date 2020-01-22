import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isEmpty = true
  message = true
  mail
  pwd
  
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {

  }

  login(){
    this.userService.getUsers().forEach(user => {
      if(user.mail === this.mail && user.password === this.pwd){
        this.authService.login()
      }else this.message = false
    });
  }

  checkForm(){
    if(this.mail && this.pwd){
      console.log('hello')
      this.isEmpty = false
    } else this.isEmpty = true
  }

}
