declare global {
  const Spell: {
    // Spell(words, name or id) to get an existing spell
    // Spell(type) ex: Spell(SPELL_INSTANT) or Spell(SPELL_RUNE) to create a new spell
    (this: void, id: number): Spell;
    (this: void, name: string): Spell;
    (this: void, words: string): Spell;
    (this: void, type: SpellType): Spell;
  };

  interface Spell {
    // spell:onCastSpell(callback)
    onCastSpell(callback: any): boolean;

    // spell:register()
    register(): boolean;

    // spell:name(name)
    name(): string;

    name(name: string): boolean;

    // spell:id(id)
    id(): number;

    id(id: number): boolean;

    // spell:group(primaryGroup[, secondaryGroup])
    group(): [SpellGroup, SpellGroup];

    group(primaryGroup: SpellGroup): boolean;

    group(primaryGroup: string): boolean;

    group(primaryGroup: SpellGroup, secondaryGroup: SpellGroup): boolean;

    group(primaryGroup: string, secondaryGroup: string): boolean;

    // spell:cooldown(cooldown)
    cooldown(): number;

    cooldown(cooldown: number): boolean;

    // spell:groupCooldown(primaryGroupCd[, secondaryGroupCd])
    groupCooldown(): [number, number];

    groupCooldown(primaryGroupCd: number): boolean;

    groupCooldown(primaryGroupCd: number, secondaryGroupCd: number): boolean;

    // spell:level(lvl)
    level(): number;

    level(lvl: number): boolean;

    // spell:magicLevel(lvl)
    magicLevel(): number;

    magicLevel(lvl: number): boolean;

    // spell:mana(mana)
    mana(): number;

    mana(mana: number): boolean;

    // spell:manaPercent(percent)
    manaPercent(): number;

    manaPercent(percent: number): boolean;

    // spell:soul(soul)
    soul(): number;

    soul(soul: number): boolean;

    // spell:range(range)
    range(): number;

    range(range: number): boolean;

    // spell:isPremium(bool)
    isPremium(): boolean;

    isPremium(bool: boolean): boolean;

    // spell:isEnabled(bool)
    isEnabled(): boolean;

    isEnabled(bool: boolean): boolean;

    // spell:needTarget(bool)
    needTarget(): boolean;

    needTarget(bool: boolean): boolean;

    // spell:needWeapon(bool)
    needWeapon(): boolean;

    needWeapon(bool: boolean): boolean;

    // spell:needLearn(bool)
    needLearn(): boolean;

    needLearn(bool: boolean): boolean;

    // spell:isSelfTarget(bool)
    isSelfTarget(): boolean;

    isSelfTarget(bool: boolean): boolean;

    // spell:isBlocking(blockingSolid, blockingCreature)
    isBlocking(): [boolean, boolean];

    isBlocking(blockingSolid: boolean, blockingCreature: boolean): boolean;

    // spell:isAggressive(bool)
    isAggressive(): boolean;

    isAggressive(bool: boolean): boolean;

    // spell:isPzLock(bool)
    isPzLock(): boolean;

    isPzLock(bool: boolean): boolean;

    // spell:vocation(vocation)
    vocation(): string[];

    vocation(vocation: string): boolean;

    // only for InstantSpells
    // spell:words(words[, separator = ""])
    words(): [string, string];

    words(words: string): boolean;

    words(words: string, separator: string): boolean;

    // only for InstantSpells
    // spell:needDirection(bool)
    needDirection(): boolean;

    needDirection(bool: boolean): boolean;

    // only for InstantSpells
    // spell:hasParams(bool)
    hasParams(): boolean;

    hasParams(bool: boolean): boolean;

    // only for InstantSpells
    // spell:hasPlayerNameParam(bool)
    hasPlayerNameParam(): boolean;

    hasPlayerNameParam(bool: boolean): boolean;

    // only for InstantSpells
    // spell:needCasterTargetOrDirection(bool)
    needCasterTargetOrDirection(): boolean;

    needCasterTargetOrDirection(bool: boolean): boolean;

    // only for InstantSpells
    // spell:isBlockingWalls(bool)
    isBlockingWalls(): boolean;

    isBlockingWalls(bool: boolean): boolean;

    // only for RuneSpells
    // spell:runeLevel(level)
    runeLevel(): number;

    runeLevel(level: number): boolean;

    // only for RuneSpells
    // spell:runeMagicLevel(magLevel)
    runeMagicLevel(): number;

    runeMagicLevel(magLevel: number): boolean;

    // only for RuneSpells
    // spell:runeId(id)
    runeId(): number;

    runeId(id: number): boolean;

    // only for RuneSpells
    // spell:charges(charges)
    charges(): number;

    charges(charges: number): boolean;

    // only for RuneSpells
    // spell:allowFarUse(bool)
    allowFarUse(): boolean;

    allowFarUse(bool: boolean): boolean;

    // only for RuneSpells
    // spell:blockWalls(bool)
    blockWalls(): boolean;

    blockWalls(bool: boolean): boolean;

    // only for RuneSpells
    // spell:checkFloor(bool)
    checkFloor(): boolean;

    checkFloor(bool: boolean): boolean;
  }
}

export {};