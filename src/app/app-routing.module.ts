import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"", component:MovieBrowserComponent},
  {path:"search", component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
