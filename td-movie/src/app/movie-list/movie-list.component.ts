import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../model/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  //private movies: Movie[] = []

  private movies
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    
    this.movieService.getMovies().subscribe(

      //PARCE QUE JE PASSE PAR DES ACCESSEURS
      //Le JSON renvoie _attribut et donc impossible d'acceder au propriété
      //SI on ajoute le "_" on a une erreur car la propriété est private dans notre classe
      //EN Javascript ne pas faire d'accesseur c'est mieux
      //Si il n'y avait pas d'accesseur :
      (result) => {
        this.movies = result;
      }

     /*  (result:any[]) => {

        for(let movie of result){
          this.movies.push(new  Movie(movie._id, movie._name, movie._real, movie._date))
        }
      } */
    )
  }

}
