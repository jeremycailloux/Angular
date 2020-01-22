import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appDate = new Date().toLocaleDateString();
  appVersion = "1.0.0:b";
  appContact = "contact@BoVoyage.fr";
  constructor() { }

  ngOnInit() {
  }

}
