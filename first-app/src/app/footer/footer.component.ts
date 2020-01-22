import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/album.service';
import { Album } from '../model/Album';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  version = '1.0.0';
  email = 'test@gmail.com';
  firstAlbum: Album;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.firstAlbum = this.albumService.getAlbums()[0];
  }

  getFormattedDate(){
    return new Date().toLocaleDateString();
  }
}
