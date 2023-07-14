import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistComponent } from './pages/playlists/details/playlist/playlist.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'playlists',
  component: PlaylistsComponent
},
{
  path: 'playlist/:id',
  component: PlaylistComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
