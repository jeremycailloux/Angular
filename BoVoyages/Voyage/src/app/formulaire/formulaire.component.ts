import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormuleService } from '../shared/formule.service';
import { Formule } from '../model/Formule';
import { ClientService } from '../shared/client.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Client } from '../model/Client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public formule: Formule;
  voyageurs: FormGroup;
  public newClient: Client;
  public clients;
  public clientExist = false;


  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService, private clientService: ClientService, private router: Router) { }



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.formuleService.findFormule(params.get('id')).subscribe(
          formule => {
            this.formule = formule;
          })
      })

    this.clientService.getClients().subscribe(
      (result) => {
        this.clients = result;
      })

    this.voyageurs = new FormGroup({
      voyageur: new FormArray([
        new FormGroup({
          nom: new FormControl('', [Validators.required,]),
          prenom: new FormControl('', [Validators.required]),
          date_naissance: new FormControl('', [Validators.required]),
          civilite: new FormControl('', [Validators.required]),
          adresse: new FormControl('', [Validators.required]),
          telephone: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
          assurance: new FormControl()
        })
      ])
    })
  }

  addVoyageur() {
    this.voyageur.push(
      new FormGroup({
        nom: new FormControl('', [Validators.required,]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        civilite: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        assurance: new FormControl(),
      })
    )
  }

  onSubmit() {

    this.validerReservation();
    this.router.navigate(['/paiement'])
  }

  validerReservation() {
    this.newClient = this.voyageur.value[0];
    let user = this.clients.find(client => client.email == this.newClient.email && client.password == this.newClient.password)
    if (user) {
      user.reservations.push(this.formule)
      this.clientService.updateUser(user).subscribe()
      this.voyageurs.value.forEach(voyageur => {
        user.voyageurs.push(voyageur)
      });

    } else {
      this.newClient.reservations = []
      this.newClient.voyageurs = []
      this.voyageurs.value.forEach(voyageur => {
        this.newClient.voyageurs.push(voyageur)
      });
      this.newClient.reservations.push(this.formule)

      this.clientService.createClient(this.newClient).subscribe()
    }


  }

  removeVoyageur(index) {
    this.voyageur.removeAt(index)
  }
  get voyageur(): FormArray {
    return this.voyageurs.get('voyageur') as FormArray
  }
}
