import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private user

  constructor(private activedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        this.user = this.userService.findUser(params.get('id'))
      }
    )
  }

}
