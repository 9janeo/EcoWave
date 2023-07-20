import { Component } from '@angular/core';
import { Playlist } from 'src/app/models/playlist.model';
import { Track } from 'src/app/models/track.model';
import { TRACKS } from 'src/app/mock-tracks';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {

  activePlaylist$: Observable<Playlist | undefined>;

  playlist: Playlist = {
    id: 1,
    coverUrl: 'https://via.placeholder.com/150',
    name: 'Neo Soul Groove',
    description: 'A collection of neo-soul artist you can\'t get enough of.',
    itemCount: 1,
    duration: 126,
    trackListIds: [1, 2]
  }
  tracks?: Array<number | string | undefined> = [];
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

  /**
   *
   */
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    // get playlist id from route
    const id: number = +this.route.snapshot.params['id'];

    // set playlist observable by finding it from allPlaylistsWithTracks
    this.activePlaylist$ = this.dataService.allPlaylistsWithTracks$.pipe(
      // tap(allPlaylists => console.log('i get here', id, allPlaylists, allPlaylists.find(eachPlaylist => eachPlaylist.id === id))),
      map(allPlaylists => {
        return allPlaylists.find(eachPlaylist => eachPlaylist.id === id);
      })
    )
  }

  ngOnInit(): void {
    // this.dataSource = this.playlist.trackListIds
    // this.tracks = this.playlist.trackListIds.map( ({id, name}) => (id + " : " + name + " \n"));
  }

  playSong(track: Track) {
    console.log('playSong', track);

    this.dataService.addAudioToQueue(track);
  }


}
