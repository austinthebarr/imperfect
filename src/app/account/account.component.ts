import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs';

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

  delivery = false;

  times = ["thu 8:00am - 12:00pm","thu 1:00pm - 3:00pm"]

  subscription = false;

  boxes = ["Organic Box", "All Veggie Box", "All Fruit Box", "Mixed Fruit & Veggie Box"];
}
