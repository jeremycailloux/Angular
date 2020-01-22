import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormuleService } from '../shared/formule.service';

@Component({
  selector: 'app-formule-details',
  templateUrl: './formule-details.component.html',
  styleUrls: ['./formule-details.component.css']
})
export class FormuleDetailsComponent implements OnInit {

  public formule;

  constructor(private activatedRoute: ActivatedRoute, private formuleService: FormuleService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.formuleService.findFormule(params.get('id')).subscribe(
          formule => {
            this.formule = formule
            console.log(formule)
          }
        )
      }
    )
  }
}
