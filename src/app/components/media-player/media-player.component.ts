import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Playlist } from 'src/app/models/playlist.model';
import { Track } from 'src/app/models/track.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements AfterViewInit {

  templatePortal!: TemplatePortal<any>;

  currentAudioFile$: Observable<Track>;

  @ViewChild('templateQueue') templateQueue!: TemplateRef<any>;
  @ViewChild('templateTrack') templateTrack!: TemplateRef<any>;
  @ViewChild('templatePlaylist') templatePlaylist!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef, private dataService: DataService) {
    this.currentAudioFile$ = dataService.mediaQueue$.pipe(map(queue => {
      console.log('queue.getNextItem()', queue.peekAtNextItem());
      return queue.peekAtNextItem();
    }));
  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.setTemplateQueue();
  }

  playNextTrack() {
    this.dataService.playNextTrack();
  }

  setTemplateTrack(): void {
    this.templatePortal = new TemplatePortal(this.templateTrack, this.viewContainerRef)
  }

  setTemplatePlaylist(): void {
    this.templatePortal = new TemplatePortal(this.templatePlaylist, this.viewContainerRef)
  }

  setTemplateQueue(): void {
    this.templatePortal = new TemplatePortal(this.templateQueue, this.viewContainerRef)
  }

}
