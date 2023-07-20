export class Queue<T> {

  public constructor(
    private elements: Record<number, T> = {},
    private first: number = 0,
    private nextPosition: number = 0,
    private last: number = 0
  ) { }

  public addToEnd(element: T): void {
    this.elements[this.last] = element;
    this.last++;
  }

  public getNextItem(): T {
    const item = this.elements[this.nextPosition];
    // go to next item
    this.nextPosition++;

    return item;
  }

  public peekAtNextItem(): T {
    return this.elements[this.nextPosition];
  }

  public get length(): number {
    return this.last - this.first;
  }

  public get lengthOfItemsLeft(): number {
    return this.last - this.nextPosition;
  }

  public get isEmpty(): boolean {
    return this.length === 0;
  }

  public get noItemsLeft(): boolean {
    return this.lengthOfItemsLeft <= 0;
  }

}
