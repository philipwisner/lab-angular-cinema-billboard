import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class CinemaService {
  movies: Movie[] = [];
  movie1: Movie;
  movie2: Movie;
  movie3: Movie;
  movie4: Movie;
  movie5: Movie;

  constructor() {
    this.movie1 = new Movie();
    this.movie1.id = 1;
    this.movie1.title = "The Shawshank Redemption";
    this.movie1.poster = "https://i.imgur.com/SuW2ZlC.jpg";
    this.movie1.synopsis = "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...";
    this.movie1.genres = ["Crime", "Drama"];
    this.movie1.year = 1994;
    this.movie1.director = "Frank Darabont";
    this.movie1.actors = ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown", "Gil Bellows"];
    this.movie1.hours = ["Wednesday 19:30", "22:30"];
    this.movie1.room = 1;

    this.movie2 = new Movie();
    this.movie2.id = 2;
    this.movie2.title = "The Godfather";
    this.movie2.poster = "https://i.imgur.com/Uzvny9I.jpg";
    this.movie2.synopsis = "In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...";
    this.movie2.genres = ["Crime", "Drama"];
    this.movie2.year = 1972;
    this.movie2.director = "Francis Ford Coppola";
    this.movie2.actors = ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano", "Robert Duvall", "Sterling Hayden"];
    this.movie2.hours = ["Tuesday 19:30", "22:30"];
    this.movie2.room = 2;

    this.movie3 = new Movie();
    this.movie3.id = 3;
    this.movie3.title = "The Godfather Part II";
    this.movie3.poster = "https://i.imgur.com/abJNkWI.jpg";
    this.movie3.synopsis = "The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...";
    this.movie3.genres = ["Crime", "Drama"];
    this.movie3.year = 1974;
    this.movie3.director = "Francis Ford Coppola";
    this.movie3.actors = ["Al Pacino", "Robert Duvall", "Diane Keaton", "Robert De Niro", "John Cazale", "Talia Shire"];
    this.movie3.hours = ["Monday 19:30", "22:30"];
    this.movie3.room = 3;

    this.movie4 = new Movie();
    this.movie4.id = 4;
    this.movie4.title = "The Dark Knight";
    this.movie4.poster = "https://i.imgur.com/3jLPB46.jpg";
    this.movie4.synopsis = "The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...";
    this.movie4.genres = ["Action", "Crime", "Drama", "Thriller"];
    this.movie4.year = 2008;
    this.movie4.director = "Christopher Nolan";
    this.movie4.actors = ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman"];
    this.movie4.hours = ["Thursday 19:30", "22:30"];
    this.movie4.room = 4;

    this.movie5 = new Movie();
    this.movie5.id = 5;
    this.movie5.title = "Schindler's List";
    this.movie5.poster = "https://i.imgur.com/IWZJOmu.jpg";
    this.movie5.synopsis = "The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...";
    this.movie5.genres = [ "Biography", "Drama", "History"];
    this.movie5.year = 1993;
    this.movie5.director = "Steven Spielberg";
    this.movie5.actors = ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall", "Jonathan Sagall", "Embeth Davidtz"];
    this.movie5.hours = ["Friday 19:30", "22:30"];
    this.movie5.room = 5;

    this.movies = [this.movie1, this.movie2, this.movie3, this.movie4, this.movie5];
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.filter((item) => {
      return item.id === id;
    })
  }

}
