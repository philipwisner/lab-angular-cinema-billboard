import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CinemaService } from '../../services/cinema-service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  movieId: number;
  movie: Movie[];
  newCinemaService: CinemaService;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.newCinemaService = new CinemaService;
    this.route.params.subscribe((params) => {
    this.movieId = params['id'];
    this.movie = this.newCinemaService.getMovie(this.movieId);
    });

  }

}
