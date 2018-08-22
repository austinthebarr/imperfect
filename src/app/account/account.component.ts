import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserService]
})


export class AccountComponent implements OnInit {
  
  users: FirebaseListObservable<any[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUserInfo();
  }

  alter(user){
    this.userService.updateUserInfo(user)
  }
  states = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','MD','MA','MI','MN','MS','MO','MT', 'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY' ];

}
