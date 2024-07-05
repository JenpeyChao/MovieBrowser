import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movieData:any;
  year: string | undefined;
  name: string | undefined;
  constructor(private MovieBrowserService:MovieBrowserService){}

  // searchMovie(){
  //   this.MovieBrowserService.searchMovie(name,year).subscribe(
  //     response =>{
  //       this.movieData = response
  //     }
  //   );
  // }
}
