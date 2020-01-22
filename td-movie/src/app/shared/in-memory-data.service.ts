import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const movies: Movie[] = [
      new Movie(1, 'The Hateful Eight', 'Tarantino', new Date("2015")),
      new Movie(2, 'Star Wars: Episode IX - The Rise of Skywalker', 'J.J Abrams', new Date('2019')),
      new Movie(3, 'Green Book', 'Peter Farrelly', new Date('2018'))
    ]

    return {movies}
  }

  constructor() { }

  
}
