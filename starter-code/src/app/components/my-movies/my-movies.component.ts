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
  movieId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
    this.movieId = params['id'];
    });
  }

}
