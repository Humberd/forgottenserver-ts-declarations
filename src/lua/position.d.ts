declare global {
  interface Position {
    getNextPosition(direction: Direction, steps?: number): Position;

    moveUpstairs(): Position;

    isInRange(from: Position, to: Position): boolean;

    notifySummonAppear(summon: Monster): void;
  }
}

export {};