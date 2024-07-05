import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { OneMovieComponent } from './one-movie/one-movie.component';

const routes: Routes = [
  {path:"", component:MovieBrowserComponent},
  {path:"search", component:SearchComponent},
  {path:"about", component:AboutComponent},
  {path:"oneMovie/:id", component:OneMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
