declare global {
  interface Creature {
    getClosestFreePosition(
      position: Position,
      maxRadius: number,
      mustBeReachable?: boolean
    ): Position;

    setMonsterOutfit(monster: Monster, time: number): boolean;

    setItemOutfit(item: Item, time: number): boolean;

    addSummon(monster: Monster): boolean;

    removeSummon(monster: Monster): boolean;

    addDamageCondition(
      target: Creature,
      type: ConditionType,
      list: DamageList,
      damage: number,
      period: number,
      rounds: number
    ): boolean;

    canAccessPz(): boolean;
  }
}

export {};
