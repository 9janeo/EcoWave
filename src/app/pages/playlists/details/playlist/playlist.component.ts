import { Component } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.model';
import { Track } from 'src/app/models/track.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {

  playlist: Playlist = {
    id: 1,
    playlist: 'https://via.placeholder.com/150',
    name: 'Neo Soul Groove',
    description: 'A collection of neo-soul artist you can\'t get enough of.',
    itemCount: 1,
    duration: 126,
    trackList: [
      {
        id: 1,
        cover: 'https://via.placeholder.com/150',
        track: 'placeholder',
        name: 'placeholder',
        duration: 130,
        artist: 'Janelle Monae',
        album: 'The Age of Pleasure',
      },
      {
        id: 2,
        cover: 'https://via.placeholder.com/150',
        track: 'Tightrope',
        name: 'Tightrope (Organized Noize remix)',
        duration: 288,
        artist: 'Janelle Monae',
        album: 'The ArchAndroid',
      },
      {
        id: 3,
        cover: 'https://via.placeholder.com/150',
        track: 'Electric Lady',
        name: 'Electric Lady (featuring Solange)',
        duration: 308,
        artist: 'Janelle Monae',
        album: 'The Electric Lady',
      }
    ]
  }
  dataSource: Array<Track> = [];
  displayedColumns: Array<string> = [
    'cover',
    'track',
    'name',
    'duration',
    'artist',
    'album',
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.playlist.trackList
  }


}
