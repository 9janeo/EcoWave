import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { Playlists } from '../models/playlists.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  // playlist$ = new BehaviorSubject<Playlist>({
  //   id: 1,
  //   cover: 'https://via.placeholder.com/150',
  //   name: 'Neo Soul Groove',
  //   description: 'A collection of neo-soul artist you can\'t get enough of.',
  //   itemCount: 1,
  //   duration: 126,
  //   trackListIds: [
  //     1,2,3
  //   ]
  // });
  constructor(private _snackBar: MatSnackBar) { }

  // addToPlaylist(playlist$: Playlist, item: Track): void {
  //   // const tracks = {...this.playlist.value.trackList};
  //   const tracks = {...playlist$.trackListIds};

  //   const trackInPlaylist = tracks.find((_tracks) => _tracks.id === item.id);

  //   if (trackInPlaylist) {
  //     // alert user and ask to duplicate?
  //     console.log(item + ' already exists in ' + this.playlist$.value.name);
  //     this._snackBar.open(' No item added to playlist.', 'ok', {duration: 3000});
  //   } else {
  //     tracks.push(item);
  //     this._snackBar.open(' 1 item added to playlist.', 'ok', {duration: 3000});
  //   }

  //   this.playlist$.next( playlist$ );
  //   // console.log(this.playlist$.value);
  // }

}
