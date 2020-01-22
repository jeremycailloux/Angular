import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Movie } from '../model/Movie';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  
  movieForm: FormGroup

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieForm = new FormGroup({
      /**
       * Premier arguement valeur apr défaut du champs
       * Deuxième liste de fonction de validateur
       */
      name: new FormControl('', [Validators.required]),
      real: new FormControl(),
      date: new FormControl(),
      actors: new FormArray([
        new FormGroup({
          firstname: new FormControl(),
          lastname: new FormControl()
        })
      ])
    })

    this.movieForm.valueChanges.subscribe(
      value => {
      }
    )
  }

  onSubmit(){
    if(this.movieForm.valid){
      this.movieService.createMovie(this.movieForm.value).subscribe(
        () => this.router.navigate(['/movie-list'])
      )
    }
  }

  get actors(): FormArray {
    return this.movieForm.get('actors') as FormArray
  }

  addActor(){
    this.actors.push(new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
    }))
  }

  delActor(index){
    this.actors.removeAt(index)
  }
}
