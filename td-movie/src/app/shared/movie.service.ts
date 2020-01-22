import { Injectable } from '@angular/core';
import { Movie } from '../model/Movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get('api/movies')
  }
  //find => Renvoie un objet Movie SI la fonction anonyme renvoie un boolean true
   findMovie(id): Observable<Movie>{
    return this.httpClient.get<Movie>('api/movies/'+ id)
  } 

  createMovie(movie){
    return this.httpClient.post('api/movies', movie);
  }
  
}
