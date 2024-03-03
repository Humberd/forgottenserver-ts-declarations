declare global {
  const Monster: {
    // Monster(id or userdata)
    (this: void, id: number): Monster | null;
    (this: void, userdata: Monster): Monster | null;
  }

  interface Monster extends Creature {
    // monster:isMonster()
    isMonster(): this is Monster;

    // monster:getId()
    getId(): number;

    // monster:getType()
    getType(): MonsterType;

    // monster:rename(name[, nameDescription])
    rename(name: string, nameDescription?: string): boolean;

    // monster:getSpawnPosition()
    getSpawnPosition(): Position;

    // monster:isInSpawnRange()
    isInSpawnRange(): boolean;

    // monster:isIdle()
    isIdle(): boolean;

    // monster:setIdle(idle)
    setIdle(idle: boolean): boolean;

    // monster:isTarget(creature)
    isTarget(creature: Creature): boolean;

    // monster:isOpponent(creature)
    isOpponent(creature: Creature): boolean;

    // monster:isFriend(creature)
    isFriend(creature: Creature): boolean;

    // monster:addFriend(creature)
    addFriend(creature: Creature): boolean;

    // monster:removeFriend(creature)
    removeFriend(creature: Creature): boolean;

    // monster:getFriendList()
    getFriendList(): Creature[];

    // monster:getFriendCount()
    getFriendCount(): number;

    // monster:addTarget(creature[, pushFront = false])
    addTarget(creature: Creature, pushFront?: boolean): boolean;

    // monster:removeTarget(creature)
    removeTarget(creature: Creature): boolean;

    // monster:getTargetList()
    getTargetList(): Creature[];

    // monster:getTargetCount()
    getTargetCount(): number;

    // monster:selectTarget(creature)
    selectTarget(creature: Creature): boolean;

    // monster:searchTarget([searchType = TARGETSEARCH_DEFAULT])
    searchTarget(searchType?: TargetSearchType): boolean;

    // monster:isWalkingToSpawn()
    isWalkingToSpawn(): boolean;

    // monster:walkToSpawn()
    walkToSpawn(): boolean;
  }

  enum TargetSearchType {
    TARGETSEARCH_DEFAULT,
    TARGETSEARCH_RANDOM,
    TARGETSEARCH_ATTACKRANGE,
    TARGETSEARCH_NEAREST,
  }
}

export {};