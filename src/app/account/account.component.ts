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

}
