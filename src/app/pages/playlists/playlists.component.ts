import { Component } from '@angular/core';
import { Curation, Playlists } from 'src/app/models/playlists.model';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent {
  playlists: Playlists = {
    curations: [
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Neo Soul Groove',
        description: 'A collection of neo-soul artist you can\'t get enough of.',
        itemCount: 1,
        duration: 126,
        id: 1
      },
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Jazzy Beats',
        description: 'A collection of rythmic jazz music perfect for creative focus.',
        itemCount: 4,
        duration: 1126,
        id: 2
      },
      {
        playlist: 'https://via.placeholder.com/150',
        name: 'Don\'t call it a comeback',
        description: 'Hip-Hop songs released in the last 5 years that are reminiscent of the art form in the 90s.',
        itemCount: 10,
        duration: 4756,
        id: 3
      }
    ]
  }
  dataSource: Array<Curation> = [];
  displayedColumns: Array<string> = [
    'playlist',
    'name',
    'description',
    'itemCount',
    'duration',
    'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.playlists.curations
  }

}
