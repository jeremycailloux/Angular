import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/Client';
import { ClientService } from '../shared/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  public loginStatus;
  clientLogin: FormGroup;
  public clients;
  public clientId;

  constructor(private router: Router, private loginService: AuthService, private html: HttpClient, private clientService: ClientService) { }

  ngOnInit() {
    this.loginStatus = this.loginService.isLoged();
    this.clientLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl()
    })

    this.clientService.getClients().subscribe(
      (result) => {
        this.clients = result;
      })
  }

  onSubmit() {
    this.clients.forEach(client => {
      if (client.email == this.clientLogin.controls.email.value && client.password == this.clientLogin.controls.password.value) {
        this.loginStatus = this.loginService.LogIn()
        this.clientId = client.id;
      }
    });
    if (!this.loginStatus) {
      alert('Votre compte n\'existe pas')
      this.clientLogin.controls.email.setValue("");
      this.clientLogin.controls.password.setValue("");
    }
    if (this.loginStatus) {
      this.router.navigate(['/gerervoyage/', this.clientId]);
    }
  }
  LogOut() {
    this.loginStatus = this.loginService.LogOut()
  }

}

