import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movieData:any;
  year: number | undefined ;
  name:string ='';
  savedSearch: string[] = [];
  constructor(private MovieBrowserService:MovieBrowserService){
    this.name='pokemon';
    this.year=2000;
    this.searchMovie();
  }



   searchMovie(){
    if(this.name && !this.savedSearch.includes(this.name)){
     this.MovieBrowserService.searchMovie(this.name,this.year).subscribe(
       response =>{
        console.log(response);
         this.movieData = response
         this.savedSearch.push(this.name);
       }
     );
   }
  }
}
