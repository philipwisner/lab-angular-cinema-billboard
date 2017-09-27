import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema-service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Movie[];

  constructor(CinemaService: CinemaService) {
    this.movies = CinemaService.getMovies();
  }

  ngOnInit() {
  }

}
