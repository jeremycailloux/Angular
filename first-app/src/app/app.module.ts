import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumComponent } from './album/album.component';
import { AlbumListeComponent } from './album-liste/album-liste.component';
import { AuthGuardService } from './auth-guard.service';
import { TestContentComponent } from './test-content/test-content.component';
import { LoginComponent } from './login/login.component';

import { InMemoryDataService } from './in-memory-data.service';
import { NewAlbumComponent } from './new-album/new-album.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'album', component: AlbumListeComponent, canActivate: [AuthGuardService] },
  { path: 'album/:id', component: AlbumComponent, canActivate: [AuthGuardService] },
  { path: 'new-album', component: NewAlbumComponent, canActivate: [AuthGuardService]  },
  { path: '**', redirectTo: 'album' }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent,
    FooterComponent,
    AlbumComponent,
    AlbumListeComponent,
    TestContentComponent,
    LoginComponent,
    NewAlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
