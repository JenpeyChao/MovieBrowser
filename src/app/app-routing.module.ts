import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBrowserComponent } from './movie-browser/movie-browser.component';

const routes: Routes = [
  {path:"", component:MovieBrowserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
