import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User = new User('c','a','c.a','aa');

  constructor() { }

  getUser(): User {
    return this.currentUser;
  }
}
