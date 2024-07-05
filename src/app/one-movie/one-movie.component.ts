import { Component } from '@angular/core';
import { MovieBrowserService } from '../movie-browser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrl: './one-movie.component.css'
})
export class OneMovieComponent {
  prevMovies:any = []
  currMovie:any;
  
  constructor(private MovieBrowserService:MovieBrowserService, private route: ActivatedRoute){
    this.getPrevMovies();
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      data =>{
        const id = data.get('id')
        if(id){
          this.findMovieById(id)
        }
    })
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
