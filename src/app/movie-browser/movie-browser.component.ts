import { Component, OnInit } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';
@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrl: './movie-browser.component.css'
})
export class MovieBrowserComponent implements OnInit {
  movieData:any = [];
  year: number | undefined;
  name: string = '';
  constructor(private MovieBrowserService:MovieBrowserService){
    this.name = 'godzilla'
    this.searchMovie();
    this.name = 'norbit';
    this.searchMovie();
    this.name = 'borat'
    this.searchMovie();
    
  }

  ngOnInit() {
      
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
