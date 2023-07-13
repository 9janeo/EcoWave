import { Component } from '@angular/core';

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  genre: string | undefined;

  onColumnsCountChange(newCols: number): void {
    this.cols = newCols;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowGenre(selectedGenre: string): void {
    this.genre = selectedGenre;
  }
}
