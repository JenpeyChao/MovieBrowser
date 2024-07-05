import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';
@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrl: './movie-browser.component.css'
})
export class MovieBrowserComponent {
  movieData:any = [];
  year: string | undefined;
  name: string | undefined;
  constructor(private MovieBrowserService:MovieBrowserService){}

  searchMovie(){
    this.MovieBrowserService.searchMovie(name,year).subscribe(
      response =>{
        this.movieData.push(response)
      }
    );
  }
}
