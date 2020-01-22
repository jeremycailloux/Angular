import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../model/Client';
import { ClientService } from '../shared/client.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-gerer-mes-voyages',
  templateUrl: './gerer-mes-voyages.component.html',
  styleUrls: ['./gerer-mes-voyages.component.css']
})
export class GererMesVoyagesComponent implements OnInit {

  public client: Client;

  constructor(private activatRoute: ActivatedRoute, private clientService: ClientService, private loginService: AuthService) {


  }

  ngOnInit() {
    this.activatRoute.paramMap.subscribe(
      (params) => {
        if (params.get('id')) {
          this.clientService.findClient(params.get('id')).subscribe(
            result => {
              this.client = result;
            }
          )
        }
      })

  }

  supprimerReservation(index) {
    this.client.reservations.splice(index, 1);
  }

  LogOut(){
    this.loginService.LogOut()
  }


}
