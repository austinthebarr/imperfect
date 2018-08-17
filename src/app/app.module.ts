import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageOneBodyComponent } from './page-one-body/page-one-body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageOneBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, PageOneBodyComponent]
})
export class AppModule { }
