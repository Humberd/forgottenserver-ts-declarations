declare global {
  const Position: {
    // Position([x = 0[, y = 0[, z = 0[, stackpos = 0]]]])
    // Position([position])
    (this: void, x?: number, y?: number, z?: number, stackpos?: number): Position
    (this: void, position: Position): Position
  };

  interface Position {
    get x(): number;

    set x(value: number);

    get y(): number;

    set y(value: number);

    get z(): number;

    set z(value: number);

    get stackpos(): number;

    set stackpos(value: number);

    // position:isSightClear(positionEx[, sameFloor = true])
    isSightClear(positionEx: Position, sameFloor?: boolean): boolean;

    // position:sendMagicEffect(magicEffect[, player = nullptr])
    sendMagicEffect(magicEffect: MagicEffectClasses, player?: Player): boolean;

    // position:sendDistanceEffect(positionEx, distanceEffect[, player = nullptr])
    sendDistanceEffect(positionEx: Position, shootType: ShootType, player?: Player): boolean;
  }

  /** @compileMembersOnly */
  enum Direction {
    DIRECTION_NORTH,
    DIRECTION_EAST,
    DIRECTION_SOUTH,
    DIRECTION_WEST,
    DIRECTION_SOUTHWEST,
    DIRECTION_SOUTHEAST,
    DIRECTION_NORTHWEST,
    DIRECTION_NORTHEAST,
  }
}

export {};