import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { AlbumService } from '../shared/album.service';


@Component({
  selector: 'app-album-liste',
  templateUrl: './album-liste.component.html',
  styleUrls: ['./album-liste.component.css']
})
export class AlbumListeComponent implements OnInit {


  public selectedAlbum: Album;
  public albums: Album[] = [];


  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe(
      (result) => {        
        this.albums = result;
      }
    );
  }

  updateAlbum(album){
  //  this.albumService.updateAlbum(album).subscribe()
  }
  setAlbum(album) {
    this.selectedAlbum = album;
  }
}
