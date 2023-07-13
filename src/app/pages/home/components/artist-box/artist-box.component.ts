import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-box',
  templateUrl: './artist-box.component.html',
  styleUrls: ['./artist-box.component.scss']
})
export class ArtistBoxComponent {
  @Input() fullWidthMode = false;
}
