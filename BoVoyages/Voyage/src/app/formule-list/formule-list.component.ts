import { Component, OnInit } from '@angular/core';
import { FormuleService } from '../shared/formule.service';
import { Formule } from '../model/Formule';

@Component({
  selector: 'app-formule-list',
  templateUrl: './formule-list.component.html',
  styleUrls: ['./formule-list.component.css']
})
export class FormuleListComponent implements OnInit {

  private formules;

  constructor(private formuleService: FormuleService) { }

  ngOnInit() {

    this.formuleService.getFormules().subscribe(
      (result) => {
        this.formules = result;
      }
    )
  }

}
