import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from "@angular/router";

import { CinemaService }from './services/cinema-service'

import { AppComponent } from './app.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'movies/:id', component: MyMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
