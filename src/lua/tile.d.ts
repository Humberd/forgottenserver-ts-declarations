declare global {
  interface Tile {
    relocateTo(position: Position): boolean;

    isWalkable(): boolean;
  }
}

export {};
