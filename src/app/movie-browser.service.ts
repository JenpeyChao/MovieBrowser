import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Welcome10 } from './movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieBrowserService {

  private ApiKey ='7a0248e4';
  constructor(private http: HttpClient) { }

  searchMovie(search:string, year:number){
    if(year!=undefined){
      return this.http.get(`https://omdbapi.com/?t=${search}&apikey=${this.ApiKey}&y=${year}`);
    } else{
    return this.http.get(`https://omdbapi.com/?t=${search}&apikey=${this.ApiKey}`);
    }
  }
}
