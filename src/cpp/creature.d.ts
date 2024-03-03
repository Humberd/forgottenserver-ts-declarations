declare global {
  const Creature: {
    // Creature(id or name or userdata)
    (this: void, id: number): Creature | null;
    (this: void, name: string): Creature | null;
    (this: void, userdata: Creature): Creature | null;
  };

  interface Creature extends Thing {
    // creature:getEvents(type)
    getEvents(eventType: CreatureEventType): string[];

    // creature:registerEvent(name)
    registerEvent(name: string): boolean;

    // creature:unregisterEvent(name)
    unregisterEvent(name: string): boolean;

    // creature:isRemoved()
    isRemoved(): boolean;

    // creature:isCreature()
    isCreature(): this is Creature;

    // creature:isInGhostMode()
    isInGhostMode(): boolean;

    // creature:isHealthHidden()
    isHealthHidden(): boolean;

    // creature:isMovementBlocked()
    isMovementBlocked(): boolean;

    // creature:canSee(position)
    canSee(position: Position): boolean;

    // creature:canSeeCreature(creature)
    canSeeCreature(creature: Creature): boolean;

    // creature:canSeeGhostMode(creature)
    canSeeGhostMode(creature: Creature): boolean;

    // creature:canSeeInvisibility()
    canSeeInvisibility(): boolean;

    // creature:getParent()
    getParent(): Cylinder | null;

    // creature:getId()
    getId(): number;

    // creature:getName()
    getName(): string;

    // creature:getTarget()
    getTarget(): Creature | null;

    // creature:setTarget(target)
    setTarget(target: Creature): boolean;

    // creature:getFollowCreature()
    getFollowCreature(): Creature | null;

    // creature:setFollowCreature(followedCreature)
    setFollowCreature(followedCreature: Creature): boolean;

    // creature:getMaster()
    getMaster(): Creature | null;

    // creature:setMaster(master)
    setMaster(master: Creature): boolean;

    // creature:getLight()
    getLight(): [number, number];

    // creature:setLight(color, level)
    setLight(color: number, level: number): boolean;

    // creature:getSpeed()
    getSpeed(): number;

    // creature:getBaseSpeed()
    getBaseSpeed(): number;

    // creature:changeSpeed(delta)
    changeSpeed(delta: number): boolean;

    // creature:setDropLoot(doDrop)
    setDropLoot(doDrop: boolean): boolean;

    // creature:setSkillLoss(skillLoss)
    setSkillLoss(skillLoss: boolean): boolean;

    // creature:getPosition()
    getPosition(): Position;

    // creature:getTile()
    getTile(): Tile | null;

    // creature:getDirection()
    getDirection(): Direction;

    // creature:setDirection(direction)
    setDirection(direction: Direction): boolean;

    // creature:getHealth()
    getHealth(): number;

    // creature:setHealth(health)
    setHealth(health: number): boolean;

    // creature:addHealth(healthChange)
    addHealth(healthChange: number): boolean;

    // creature:getMaxHealth()
    getMaxHealth(): number;

    // creature:setMaxHealth(maxHealth)
    setMaxHealth(maxHealth: number): boolean;

    // creature:setHiddenHealth(hide)
    setHiddenHealth(hide: boolean): boolean;

    // creature:setMovementBlocked(state)
    setMovementBlocked(state: boolean): boolean;

    // creature:getSkull()
    getSkull(): Skulls;

    // creature:setSkull(skull)
    setSkull(skull: Skulls): boolean;

    // creature:getOutfit()
    getOutfit(): OutfitLook;

    // creature:setOutfit(outfit)
    setOutfit(outfit: OutfitLook): boolean;

    // creature:getCondition(conditionType[, conditionId = CONDITIONID_COMBAT[, subId = 0]])
    getCondition(
      conditionType: ConditionType,
      conditionId?: ConditionId,
      subId?: number
    ): Condition | null;

    // creature:addCondition(condition[, force = false])
    addCondition(condition: Condition, force?: boolean): boolean;

    // creature:removeCondition(conditionType[, conditionId = CONDITIONID_COMBAT[, subId = 0[, force = false]]])
    removeCondition(
      conditionType: ConditionType,
      conditionId?: ConditionId,
      subId?: number,
      force?: boolean
    ): boolean;

    // creature:removeCondition(condition[, force = false])
    removeCondition(condition: Condition, force?: boolean): boolean;

    // creature:hasCondition(conditionType[, subId = 0])
    hasCondition(conditionType: ConditionType, subId?: number): boolean;

    // creature:isImmune(condition or conditionType)
    isImmune(condition: Condition | ConditionType): boolean;

    // creature:remove()
    remove(): boolean;

    // creature:teleportTo(position[, pushMovement = false])
    teleportTo(position: Position, pushMovement?: boolean): boolean;

    // creature:say(text[, type = TALKTYPE_MONSTER_SAY[, ghost = false[, target = nullptr[, position]]]])
    say(
      text: string,
      type?: SpeakClasses,
      ghost?: boolean,
      target?: Creature,
      position?: Position
    ): boolean;

    // creature:getDamageMap()
    getDamageMap(): DamageMap;

    // creature:getSummons()
    getSummons(): Creature[];

    // creature:getDescription(distance)
    getDescription(distance: number): string;

    // creature:getPathTo(pos[, minTargetDist = 0[, maxTargetDist = 1[, fullPathSearch = true[, clearSight = true[,
    // maxSearchDist = 0]]]]])
    getPathTo(
      pos: Position,
      minTargetDist?: number,
      maxTargetDist?: number,
      fullPathSearch?: boolean,
      clearSight?: boolean,
      maxSearchDist?: number
    ): Direction[];

    // creature:move(direction)
    move(direction: Direction): boolean;

    // creature:move(tile[, flags = 0])
    move(tile: Tile, flags?: number): boolean;

    // creature:getZone()
    getZone(): number;

    // creature:getStorageValue(key)
    getStorageValue(key: number): number | null;

    // creature:setStorageValue(key, value)
    setStorageValue(key: number, value: number): boolean;
  }

  /** @compileMembersOnly */
  enum Slots {
    CONST_SLOT_HEAD = 1,
    CONST_SLOT_NECKLACE = 2,
    CONST_SLOT_BACKPACK = 3,
    CONST_SLOT_ARMOR = 4,
    CONST_SLOT_RIGHT = 5,
    CONST_SLOT_LEFT = 6,
    CONST_SLOT_LEGS = 7,
    CONST_SLOT_FEET = 8,
    CONST_SLOT_RING = 9,
    CONST_SLOT_AMMO = 10,
  }

  /** @compileMembersOnly */
  enum DamageList {
    DAMAGELIST_EXPONENTIAL_DAMAGE = 0,
    DAMAGELIST_LOGARITHMIC_DAMAGE = 1,
    DAMAGELIST_VARYING_PERIOD = 2,
    DAMAGELIST_CONSTANT_PERIOD = 3
  }
}

export {};