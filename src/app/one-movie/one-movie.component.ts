import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrl: './one-movie.component.css'
})
export class OneMovieComponent {
  prevMovies:any = []
  currMovie:any;
  constructor(private MovieBrowserService:MovieBrowserService){
    this.getPrevMovies();
  }
  getPrevMovies(){
    this.MovieBrowserService.getAllMovie().subscribe(
      movies =>{
        this.prevMovies = movies
    });
  }

  findMovieById(id:string){
    for(let i =0; i< this.prevMovies.length;i++){
      if(this.prevMovies[i].id === id){
        this.currMovie = this.prevMovies[i]
      }
    }
  }
}
