import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public USERS = [
    new User('Jean', 'Martin', 'jeanmartin@gmail.com', 'mdp'),
    new User('Eric', 'Dupont', 'ericdupont@gmail.com', '1234'),
    new User('Thierry', 'Legrand', 'thierrylegrand@gmail.com', 'azerty')
  ]

  constructor() { }

  public getUsers(){
    return this.USERS
  }

  public findUser(name){
    return this.USERS.find( user => {
      return name === user.lastname
    })
  }
}
