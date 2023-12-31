import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import  { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistsHeaderComponent } from './pages/home/components/artists-header/artists-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ArtistBoxComponent } from './pages/home/components/artist-box/artist-box.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistComponent } from './pages/playlists/details/playlist/playlist.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CuratorService } from './services/curator.service';
import { PlaylistService } from './services/playlist.service';
import { TracklistComponent } from './components/track/tracklist/tracklist.component';
import { TrackBoxComponent } from './components/track/track-box/track-box/track-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistsHeaderComponent,
    FiltersComponent,
    ArtistBoxComponent,
    PlaylistsComponent,
    PlaylistComponent,
    MediaPlayerComponent,
    TracklistComponent,
    TrackBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    PortalModule,
  ],
  providers: [CuratorService, PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
