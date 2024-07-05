import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';
@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrl: './movie-browser.component.css'
})
export class MovieBrowserComponent {
  movieData:any = [];
  year = '';
  name = '';
  constructor(private MovieBrowserService:MovieBrowserService){}

  searchMovie(){}
}
