import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, take, withLatestFrom } from 'rxjs';
import { Playlist } from '../models/playlist.model';
import { Playlists } from '../models/playlists.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Track } from '../models/track.model';
import { PLAYLISTS } from '../mock-playlists';
import { TRACKS } from '../mock-tracks';
import { Queue } from '../models/queue.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  playNextTrack() {
    this.mediaQueue$.pipe(
      take(1)
    ).subscribe(newQueue => {
      newQueue.getNextItem();
      this.mediaQueue$.next(newQueue);

      console.log('this.mediaQueue$ AAA length', newQueue.length, newQueue.lengthOfItemsLeft);
    });
  }
  allPlaylists$ = new BehaviorSubject<Playlist[]>(PLAYLISTS);
  allTracks$ = new BehaviorSubject<Track[]>(TRACKS);

  mediaQueue$ = new BehaviorSubject<Queue<Track>>(new Queue<Track>());

  allPlaylistsWithTracks$ = this.allPlaylists$.pipe(
    withLatestFrom(this.allTracks$),
    map(([playlists, allTracks]) => {
      // fill in the trackList field with actual track objects
      const allTrackDict: { [key: number]: Track } = {};
      allTracks.forEach(track => {
        allTrackDict[track.id] = track;
      });

      return playlists.map(playlist => {
        const numberOfTracksInPlaylist = playlist.trackListIds.length;
        let playlistDuration = 0;
        const trackObjects =
          playlist.trackListIds.map(trackId => {
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

  addAudioToQueue(audio: Track) {
    console.log('addToAudioQureyue', audio);

    this.mediaQueue$.pipe(
      take(1),
      map(queue => {
        queue.addToEnd(audio);
        return queue;
      })
    ).subscribe(newQueue => {
      this.mediaQueue$.next(newQueue);

      console.log('this.mediaQueue$ AAA length', newQueue.length, newQueue.lengthOfItemsLeft);
    });
  }

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
