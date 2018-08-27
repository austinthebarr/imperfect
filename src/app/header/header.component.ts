import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})
export class HeaderComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private router: Router){
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['']);
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.router.navigate([]);
      }
    });
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

@Input() imperfectLogo:string;
}