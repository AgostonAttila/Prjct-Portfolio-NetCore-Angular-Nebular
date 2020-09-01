
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Béla', picture: 'assets/images/nick.png' },
    eva: { name: 'Éva', picture: 'assets/images/eva.png' },
    jack: { name: 'János', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan', picture: 'assets/images/alan.png' },
    kate: { name: 'Kati', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
