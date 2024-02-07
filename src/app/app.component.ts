import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from '../../services/movie.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-list';

  movies:any[]=[];
  constructor(private movieService:MovieService){}

  ngOnInit(){
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }
}
