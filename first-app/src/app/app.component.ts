import { Component, OnInit } from '@angular/core';
import { Album } from './model/Album';
import { Song } from './model/Song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'first-app';

  ngOnInit(): void {

  }

}
