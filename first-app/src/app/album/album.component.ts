import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../shared/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public album;
  public activateClass = '';

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      ( params ) => { 
        
        const idAlbum = params.get('id');
        this.albumService.findAlbum(idAlbum).subscribe(
          (album) => this.album = album
        );

        
      }
    )
  }

  save() {

    if( this.album.grade == 5){
      this.activateClass = 'green';
    } else if( this.album.grade == 0){
      this.activateClass = 'red';
    } else {
      this.activateClass = '';
    }
  }
}
