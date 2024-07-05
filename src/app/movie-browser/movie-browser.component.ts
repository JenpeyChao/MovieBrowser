import { Component } from '@angular/core';
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
  constructor(private MovieBrowserService:MovieBrowserService){
    this.name = 'godzilla'
    this.searchMovie();
    
    

  }

  searchMovie(){
    console.log(this.name)
    this.MovieBrowserService.searchMovie(this.name,this.year).subscribe(
      response =>{
        console.log(response)
        this.movieData.push(response)
      }
    );
  }
}
