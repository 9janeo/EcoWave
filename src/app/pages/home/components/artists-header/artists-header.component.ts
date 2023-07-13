import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artists-header',
  templateUrl: './artists-header.component.html',
  styleUrls: ['./artists-header.component.scss']
})
export class ArtistsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  artistShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onArtistsUpdated(newCount: number): void {
    this.artistShowCount = newCount;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }

}

