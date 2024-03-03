declare global {
  const MonsterType: {
    // MonsterType(name or raceId)
    (this: void, name: string): MonsterType | null;
    (this: void, raceId: number): MonsterType | null;
  }

  interface MonsterType {
    // get: monsterType:isAttackable() set: monsterType:isAttackable(bool)
    isAttackable(): boolean;
    isAttackable(isAttackable: boolean): boolean;

    // get: monsterType:isChallengeable() set: monsterType:isChallengeable(bool)
    isChallengeable(): boolean;
    isChallengeable(isChallengeable: boolean): boolean;

    // get: monsterType:isConvinceable() set: monsterType:isConvinceable(bool)
    isConvinceable(): boolean;
    isConvinceable(isConvinceable: boolean): boolean;

    // get: monsterType:isSummonable() set: monsterType:isSummonable(bool)
    isSummonable(): boolean;
    isSummonable(isSummonable: boolean): boolean;

    // get: monsterType:isIgnoringSpawnBlock() set: monsterType:isIgnoringSpawnBlock(bool)
    isIgnoringSpawnBlock(): boolean;
    isIgnoringSpawnBlock(isIgnoringSpawnBlock: boolean): boolean;

    // get: monsterType:isIllusionable() set: monsterType:isIllusionable(bool)
    isIllusionable(): boolean;
    isIllusionable(isIllusionable: boolean): boolean;

    // get: monsterType:isHostile() set: monsterType:isHostile(bool)
    isHostile(): boolean;
    isHostile(isHostile: boolean): boolean;

    // get: monsterType:isPushable() set: monsterType:isPushable(bool)
    isPushable(): boolean;
    isPushable(isPushable: boolean): boolean;

    // get: monsterType:isHealthHidden() set: monsterType:isHealthHidden(bool)
    isHealthHidden(): boolean;
    isHealthHidden(isHealthHidden: boolean): boolean;

    // get: monsterType:isBoss() set: monsterType:isBoss(bool)
    isBoss(): boolean;
    isBoss(isBoss: boolean): boolean;

    // get: monsterType:canPushItems() set: monsterType:canPushItems(bool)
    canPushItems(): boolean;
    canPushItems(canPushItems: boolean): boolean;

    // get: monsterType:canPushCreatures() set: monsterType:canPushCreatures(bool)
    canPushCreatures(): boolean;
    canPushCreatures(canPushCreatures: boolean): boolean;

    // get: monsterType:canWalkOnEnergy() set: monsterType:canWalkOnEnergy(bool)
    canWalkOnEnergy(): boolean;
    canWalkOnEnergy(canWalkOnEnergy: boolean): boolean;

    // get: monsterType:canWalkOnFire() set: monsterType:canWalkOnFire(bool)
    canWalkOnFire(): boolean;
    canWalkOnFire(canWalkOnFire: boolean): boolean;

    // get: monsterType:canWalkOnPoison() set: monsterType:canWalkOnPoison(bool)
    canWalkOnPoison(): boolean;
    canWalkOnPoison(canWalkOnPoison: boolean): boolean;

    // get: monsterType:name() set: monsterType:name(name)
    name(): string;
    name(name: string): boolean;

    // get: monsterType:nameDescription() set: monsterType:nameDescription(desc)
    nameDescription(): string;
    nameDescription(nameDescription: string): boolean;

    // get: monsterType:health() set: monsterType:health(health)
    health(): number;
    health(health: number): boolean;

    // get: monsterType:maxHealth() set: monsterType:maxHealth(health)
    maxHealth(): number;
    maxHealth(maxHealth: number): boolean;

    // get: monsterType:runHealth() set: monsterType:runHealth(health)
    runHealth(): number;
    runHealth(runHealth: number): boolean;

    // get: monsterType:experience() set: monsterType:experience(exp)
    experience(): number;
    experience(experience: number): boolean;

    // get: monsterType:skull() set: monsterType:skull(str/constant)
    skull(): Skulls;
    skull(skull: Skulls | string): boolean;

    // get: monsterType:combatImmunities() set: monsterType:combatImmunities(immunity)
    combatImmunities(): number;
    combatImmunities(combatImmunities: string): boolean;

    // get: monsterType:conditionImmunities() set: monsterType:conditionImmunities(immunity)
    conditionImmunities(): number;
    conditionImmunities(conditionImmunities: string): boolean;

    // monsterType:getAttackList()
    getAttackList(): SpellBlock[];

    // monsterType:addAttack(monsterspell)
    addAttack(monsterSpell: MonsterSpell): boolean;

    // monsterType:getDefenseList()
    getDefenseList(): SpellBlock[];

    // monsterType:addDefense(monsterspell)
    addDefense(monsterSpell: MonsterSpell): boolean;

    // monsterType:getElementList()
    getElementList(): number[];

    // monsterType:addElement(type, percent)
    addElement(type: CombatType, percent: number): boolean;

    // monsterType:getVoices()
    getVoices(): VoiceBlock[];

    // monsterType:addVoice(sentence, interval, chance, yell)
    addVoice(sentence: string, interval: number, chance: number, yell: boolean): boolean;

    // monsterType:getLoot()
    getLoot(): Loot[];

    // monsterType:addLoot(loot)
    addLoot(loot: Loot): boolean;

    // monsterType:getCreatureEvents()
    getCreatureEvents(): string[];

    // monsterType:registerEvent(name)
    registerEvent(name: string): boolean;

    // monsterType:onThink(callback)
    // monsterType:onAppear(callback)
    // monsterType:onDisappear(callback)
    // monsterType:onMove(callback)
    // monsterType:onSay(callback)
    onThink(callback: any): boolean;

    onAppear(callback: any): boolean;

    onDisappear(callback: any): boolean;

    onMove(callback: any): boolean;

    onSay(callback: any): boolean;

    // monstertype:eventType(event)
    eventType(event: MonstersEvent): boolean;

    // monsterType:getSummonList()
    getSummonList(): SummonBlock[];

    // monsterType:addSummon(name, interval, chance[, max = -1[, effect = CONST_ME_TELEPORT[, masterEffect =
    // CONST_ME_NONE]]])
    addSummon(
      name: string,
      interval: number,
      chance: number,
      max?: number,
      effect?: number,
      masterEffect?: number
    ): boolean;

    // get: monsterType:maxSummons() set: monsterType:maxSummons(ammount)
    maxSummons(): number;
    maxSummons(maxSummons: number): boolean;

    // get: monsterType:armor() set: monsterType:armor(armor)
    armor(): number;
    armor(armor: number): boolean;

    // get: monsterType:defense() set: monsterType:defense(defense)
    defense(): number;
    defense(defense: number): boolean;

    // get: monsterType:outfit() set: monsterType:outfit(outfit)
    outfit(): OutfitLook;
    outfit(outfit: OutfitLook): boolean;

    // get: monsterType:race() set: monsterType:race(race)
    race(): RaceType;
    race(race: RaceTypeString): boolean;

    // get: monsterType:corpseId() set: monsterType:corpseId(id)
    corpseId(): number;
    corpseId(corpseId: number): boolean;

    // get: monsterType:manaCost() set: monsterType:manaCost(mana)
    manaCost(): number;
    manaCost(manaCost: number): boolean;

    // get: monsterType:baseSpeed() set: monsterType:baseSpeed(speed)
    baseSpeed(): number;
    baseSpeed(baseSpeed: number): boolean;

    // get: monsterType:light() set: monsterType:light(color, level)
    light(): [color: number, level: number];
    light(color: number, level: number): boolean;

    // get: monsterType:staticAttackChance() set: monsterType:staticAttackChance(chance)
    staticAttackChance(): number;
    staticAttackChance(staticAttackChance: number): boolean;

    // get: monsterType:targetDistance() set: monsterType:targetDistance(distance)
    targetDistance(): number;
    targetDistance(targetDistance: number): boolean;

    // get: monsterType:yellChance() set: monsterType:yellChance(chance)
    yellChance(): number;
    yellChance(yellChance: number): boolean;

    // get: monsterType:yellSpeedTicks() set: monsterType:yellSpeedTicks(rate)
    yellSpeedTicks(): number;
    yellSpeedTicks(yellSpeedTicks: number): boolean;

    // get: monsterType:changeTargetChance() set: monsterType:changeTargetChance(chance)
    changeTargetChance(): number;
    changeTargetChance(changeTargetChance: number): boolean;

    // get: monsterType:changeTargetSpeed() set: monsterType:changeTargetSpeed(speed)
    changeTargetSpeed(): number;
    changeTargetSpeed(changeTargetSpeed: number): boolean;

    // get: monsterType:bestiaryInfo() set: monsterType:bestiaryInfo(info)
    bestiaryInfo(): BestiaryInfo;
    bestiaryInfo(bestiaryInfo: BestiaryInfo): boolean;
  }

  interface BestiaryInfo {
    className: string;
    raceId: number;
    prowess: number;
    expertise: number;
    mastery: number;
    charmPoints: number;
    difficulty: number;
    occurrence: number;
    locations: string;
  }

  type RaceTypeString = 'venom' | 'blood' | 'undead' | 'fire' | 'energy';

  interface SummonBlock {
    name: string;
    speed: number;
    chance: number;
    max: number;
    effect: number;
    masterEffect: number;
  }

  interface VoiceBlock {
    text: string;
    yellText: boolean;
  }

  interface SpellBlock {
    chance: number;
    isCombatSpell: boolean;
    isMelee: boolean;
    minCombatValue: number;
    maxCombatValue: number;
    range: number;
    speed: number;
    spell: CombatSpell;
  }
}

export {};