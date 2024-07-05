import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Welcome10 } from './movie.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieBrowserService {

  private ApiKey ='7a0248e4';
  constructor(private http: HttpClient) { }

  searchMovie(search:string, year:number|undefined) :Observable<Welcome10> {
    // if(year!=undefined){
    //   return this.http.get<Welcome10>(`https://omdbapi.com/?t=${search}&y=${year}&apikey=${this.ApiKey}`);
    // } else{
    // return this.http.get<Welcome10>(`https://omdbapi.com/?t=${search}&apikey=${this.ApiKey}`);
    // }
    return this.http.get<Welcome10>(`http://www.omdbapi.com/?t=godzilla&y=2007&apikey=5d276e2f`)
  }
}
