import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.css']
})
export class TestContentComponent implements OnInit {
  @Input() item;
  
  constructor() { }

  ngOnInit() {
  }

}
