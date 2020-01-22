import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NewMovieComponent } from './new-movie/new-movie.component';


const routes: Routes = [
  {
    path: 'user-list', 
    component: UserListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user/:id', 
    component: UserDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'movie-list',
    component: MovieListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'new-movie', 
    component: NewMovieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'new-movie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
