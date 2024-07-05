import { Component, OnInit } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';

@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrl: './movie-browser.component.css'
})
export class MovieBrowserComponent {
  movieData:any = [];
  year: number | undefined;
  name: string = '';
  prevMovies: any = [];
  constructor(private MovieBrowserService:MovieBrowserService){
    this.getPrevMovies();
  }


  getPrevMovies(){
    this.MovieBrowserService.getAllMovie().subscribe(
      movies =>{
        this.prevMovies = movies
    });
  }
}
