import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneBodyComponent } from './page-one-body/page-one-body.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageOneBodyComponent
  },
  {
    path: 'user/account',
    component: AccountComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);