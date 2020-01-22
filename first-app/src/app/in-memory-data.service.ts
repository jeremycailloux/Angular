import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Album } from './model/Album';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    
    const albums : Album[] = [
      new Album(1, 'a','b',0,[],'assets/queen.jpg'),
      new Album(2, 'b','c',0,[],'assets/queen.jpg'),
      new Album(3, 'c','d',0,[],'assets/queen.jpg'),
      new Album(4, 'd','e',0,[],'assets/queen.jpg'),
    ];

    const users = [];
      
    return { albums, users };
  }
}
