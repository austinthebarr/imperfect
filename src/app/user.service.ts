import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){  
    this.users = database.list('userInfo');
  }

  getUserInfo(){
  return this.users;
  }

  getUserById(userId: string){
    return this.database.object('userInfo/'+ userId);
  }

  updateUserInfo(user){
    let userEntry = this.getUserById(user.$key);
    userEntry.update({apt: user.apt,
                 city: user.city,
                 deliveryNotes: user.deliveryNotes,
                 name: user.name,
                 state: user.state,
                 street: user.street,
                 zip: user.zip })
  }
}