declare global {
  const MonsterSpell: {
    // MonsterSpell()
    (this: void): MonsterSpell;
  };

  interface MonsterSpell {
    // monsterSpell:delete() monsterSpell:__gc()
    delete(): void;

    // monsterSpell:setType(type)
    setType(type: string): boolean;

    // monsterSpell:setScriptName(name)
    setScriptName(name: string): boolean;

    // monsterSpell:setChance(chance)
    setChance(chance: number): boolean;

    // monsterSpell:setInterval(interval)
    setInterval(interval: number): boolean;

    // monsterSpell:setRange(range)
    setRange(range: number): boolean;

    // monsterSpell:setCombatValue(min, max)
    setCombatValue(min: number, max: number): boolean;

    // monsterSpell:setCombatType(combatType_t)
    setCombatType(combatType: CombatType): boolean;

    // monsterSpell:setAttackValue(attack, skill)
    setAttackValue(attack: number, skill: number): boolean;

    // monsterSpell:setNeedTarget(bool)
    setNeedTarget(isNeedTarget: boolean): boolean;

    // monsterSpell:setNeedDirection(bool)
    setNeedDirection(isNeedDirection: boolean): boolean;

    // monsterSpell:setCombatLength(length)
    setCombatLength(length: number): boolean;

    // monsterSpell:setCombatSpread(spread)
    setCombatSpread(spread: number): boolean;

    // monsterSpell:setCombatRadius(radius)
    setCombatRadius(radius: number): boolean;

    // monsterSpell:setCombatRing(ring)
    setCombatRing(ring: number): boolean;

    // monsterSpell:setConditionType(type)
    setConditionType(type: ConditionType): boolean;

    // monsterSpell:setConditionDamage(min, max, start)
    setConditionDamage(min: number, max: number, start: number): boolean;

    // monsterSpell:setConditionSpeedChange(minSpeed[, maxSpeed])
    setConditionSpeedChange(minSpeed: number, maxSpeed?: number): boolean;

    // monsterSpell:setConditionDuration(duration)
    setConditionDuration(duration: number): boolean;

    // monsterSpell:setConditionDrunkenness(drunkenness)
    setConditionDrunkenness(drunkenness: number): boolean;

    // monsterSpell:setConditionTickInterval(interval)
    setConditionTickInterval(interval: number): boolean;

    // monsterSpell:setCombatShootEffect(effect)
    setCombatShootEffect(effect: ShootType): boolean;

    // monsterSpell:setCombatEffect(effect)
    setCombatEffect(effect: MagicEffectClasses): boolean;

    // monsterSpell:setOutfit(outfit)
    setOutfit(outfit: OutfitLook | number | string): boolean;
  }
}

export {};