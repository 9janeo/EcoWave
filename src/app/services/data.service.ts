import { Injectable } from '@angular/core';
import { BehaviorSubject, map, withLatestFrom } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { Playlists } from '../models/playlists.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Track } from '../models/track.model';
import { PLAYLISTS } from '../mock-playlists';
import { TRACKS } from '../mock-tracks';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allPlaylists$ = new BehaviorSubject<Playlist[]>(PLAYLISTS);
  allTracks$ = new BehaviorSubject<Track[]>(TRACKS);

  allPlaylistsWithTracks$ = this.allPlaylists$.pipe(
    withLatestFrom(this.allTracks$),
    map( ([playlists, allTracks]) => {
      // fill in the trackList field with actual track objects
      const allTrackDict: { [key: number]: Track } = {};
      allTracks.forEach(track => {
        allTrackDict[track.id] = track;
      });



      return playlists.map( playlist => {
        const numberOfTracksInPlaylist = playlist.trackListIds.length;
        let playlistDuration = 0;
        const trackObjects =
          playlist.trackListIds.map( trackId => {
            const trackObject = allTrackDict[trackId];
            // calculate playlist duration
            playlistDuration += trackObject.duration;
            return trackObject;
          });

        return { ...playlist, trackLists: trackObjects, itemCount: numberOfTracksInPlaylist, duration: playlistDuration };
      });
    })
  )

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
