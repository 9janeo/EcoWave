import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() showGenre = new EventEmitter<string>();
  genres = ['indie-pop', 'hip-hop', 'rnb', 'rap', 'dance', 'pop', 'neo-soul']

  onShowGenre(genre: string): void {
    this.showGenre.emit(genre);
  }
}
