import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements AfterViewInit {

  templatePortal!: TemplatePortal<any>;

  @ViewChild('templateQueue') templateQueue!: TemplateRef<any>;
  @ViewChild('templateTrack') templateTrack!: TemplateRef<any>;
  @ViewChild('templatePlaylist') templatePlaylist!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {  }
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.setTemplateQueue();
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
