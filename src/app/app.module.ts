import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageOneBodyComponent } from './page-one-body/page-one-body.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageOneBodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, PageOneBodyComponent]
})
export class AppModule { }
