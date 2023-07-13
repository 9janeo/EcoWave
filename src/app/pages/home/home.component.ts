import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  colsCount = 1;
  genre: string | undefined;

  onColumnsCountChange(newCols: number): void {
    this.colsCount = newCols
  }

  onShowGenre(selectedGenre: string): void {
    this.genre = selectedGenre;
  }
}
