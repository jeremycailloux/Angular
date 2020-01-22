import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  private movie

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.movieService.findMovie(params.get('id')).subscribe(
          movie => {
            this.movie = movie
            console.log(movie)
          }
        )          
      }
    )
  }

  

}
