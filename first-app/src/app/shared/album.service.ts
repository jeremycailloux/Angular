import { Injectable } from '@angular/core';
import { Album } from '../model/Album';
import { Song } from '../model/Song';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('api/albums');
  }

  createAlbum(album) {
    return this.httpClient.post('api/albums', album);
  }


  findAlbum(id): Observable<Album> {
    return this.httpClient.get<Album>('api/albums/' + id);
  }


}
