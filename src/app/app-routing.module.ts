import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", component:MovieBrowserComponent},
  {path:"search", component:SearchComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
