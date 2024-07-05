import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Welcome10 } from './movie.model';
import { Observable } from 'rxjs';
import { Root } from './db.model';
@Injectable({
  providedIn: 'root'
})
export class MovieBrowserService {

  private ApiKey ='7a0248e4';
  private dbUrl = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) { }

  searchMovie(search:string, year:number|undefined) :Observable<Welcome10> {
    if(year!=undefined){
      return this.http.get<Welcome10>(`https://www.omdbapi.com/?t=${search}&y=${year}&apikey=${this.ApiKey}`);
    } else{
    return this.http.get<Welcome10>(`https://www.omdbapi.com/?t=${search}&apikey=${this.ApiKey}`);
    }
  }
  getAllMovie(): Observable<Root>{
    return this.http.get<Root>(this.dbUrl);
  }

}
