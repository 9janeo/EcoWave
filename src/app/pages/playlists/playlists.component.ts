import { Component } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { Playlist } from 'src/app/models/playlist.model';
import { Playlists } from 'src/app/models/playlists.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {

  /**
   *
   */
  constructor(private dataService:DataService ) {

  }

  playlists$ = this.dataService.allPlaylistsWithTracks$;
  dataSource: Array<Playlist> = [];
  displayedColumns: Array<string> = [
    'playlist',
    'name',
    'description',
    'itemCount',
    'duration',
    'action'
  ]

  ngOnInit(): void {
    // this.dataSource = this.playlists.items
  }

}
