import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneBodyComponent } from './page-one-body/page-one-body.component';
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageOneBodyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign_up',
    component: SignUpComponent 
  },
  {
    path: 'user/account',
    component: AccountComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);