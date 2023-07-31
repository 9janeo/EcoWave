import { Component } from '@angular/core';
import { Track } from '../../../models/track.model';
import { TRACKS } from '../../../mock-tracks';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})

export class TracklistComponent {
  tracks: Track[] = TRACKS;

}
