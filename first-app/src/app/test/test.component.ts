import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public items;

  constructor() { }

  ngOnInit() {
    this.items = [
      {title: 'id1', content: 'conten1'},
      {title: 'id1', content: 'conten1'}
    ];
  }

}
