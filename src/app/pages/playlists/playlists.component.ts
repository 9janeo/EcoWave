import { Component } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { Playlist } from 'src/app/models/playlist.model';
import { Playlists } from 'src/app/models/playlists.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
  tracks = [
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
  ];

  playlists: Playlists = {
    items: [
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Neo Soul Groove',
        description: 'A collection of neo-soul artist you can\'t get enough of.',
        itemCount: 1,
        duration: 126,
        id: 1,
        trackList: this.tracks
      },
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Jazzy Beats',
        description: 'A collection of rythmic jazz music perfect for creative focus.',
        itemCount: 4,
        duration: 1126,
        id: 2,
        trackList: this.tracks
      },
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Don\'t call it a comeback',
        description: 'Hip-Hop songs released in the last 5 years that are reminiscent of the art form in the 90s.',
        itemCount: 10,
        duration: 4756,
        id: 3,
        trackList: this.tracks
      }
    ]
  }
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
    this.dataSource = this.playlists.items
  }

}
