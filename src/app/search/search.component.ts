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
  savedSearch: any[] = [];
  POSToptions = {
    method: "POST",
    body: ""
  }

  
  constructor(private MovieBrowserService:MovieBrowserService){
  }

   searchMovie(){
    if(this.name && !this.savedSearch.includes(this.name)) {
     this.MovieBrowserService.searchMovie(this.name,this.year).subscribe(
       response =>{
        console.log(response);
         this.movieData = response
         this.savedSearch.push(this.movieData);

         this.POSToptions.body = JSON.stringify(this.movieData);

         const res = fetch("http://localhost:3000/movies", this.POSToptions);

       }
     );
   }}
}
