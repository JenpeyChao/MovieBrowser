import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieBrowserService {

  private ApiKey ='7a0248e4';
  constructor(private http: HttpClient) { }

  searchForMovie(search:string, year:number){
    if(year!=undefined){
      return this.http.get(`https://omdbapi.com/?apikey=${this.ApiKey}&t=${search}&y=${year}`);
    } else{
    return this.http.get(`https://omdbapi.com/?apikey=${this.ApiKey}&t=${search}`);
    }
  }
}
