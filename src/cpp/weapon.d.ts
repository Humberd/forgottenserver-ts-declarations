declare global {
  const Weapon: {
    // Weapon(type)
    (this: void, type: WeaponType): Weapon | null;
  }

  interface Weapon {
    // weapon:action(callback)
    action(callback: WeaponActionType): boolean;

    // weapon:register()
    register(): boolean;

    // weapon:onUseWeapon(callback)
    onUseWeapon(callback: any): boolean;

    // weapon:wieldUnproperly(bool)
    wieldUnproperly(bool: boolean): boolean;

    // weapon:level(lvl)
    level(lvl: number): boolean;

    // weapon:magicLevel(lvl)
    magicLevel(lvl: number): boolean;

    // weapon:mana(mana)
    mana(mana: number): boolean;

    // weapon:manaPercent(percent)
    manaPercent(percent: number): boolean;

    // weapon:health(health)
    health(health: number): boolean;

    // weapon:healthPercent(percent)
    healthPercent(percent: number): boolean;

    // weapon:soul(soul)
    soul(soul: number): boolean;

    // weapon:breakChance(percent)
    breakChance(percent: number): boolean;

    // weapon:damage(damage[min, max]) only use this if the weapon is a wand!
    damage(damage: number): boolean;
    damage(min: number, max: number): boolean;

    // weapon:element(combatType)
    element(combatType: CombatType | WeaponElementType): boolean;

    // weapon:premium(bool)
    premium(bool: boolean): boolean;

    // weapon:vocation(vocName[, showInDescription = false, lastVoc = false])
    vocation(vocName: string, showInDescription?: boolean, lastVoc?: boolean): boolean;

    // weapon:id(id)
    id(id: number): boolean;

    // weapon:attack(atk)
    attack(atk: number): boolean;

    // weapon:defense(defense[, extraDefense])
    defense(defense: number, extraDefense?: number): boolean;

    // weapon:range(range)
    range(range: number): boolean;

    // weapon:charges(charges[, showCharges = true])
    charges(charges: number, showCharges?: boolean): boolean;

    // weapon:duration(duration[, showDuration = true])
    duration(duration: number, showDuration?: boolean): boolean;

    // weapon:decayTo([itemid = 0])
    decayTo(itemid?: number): boolean;

    // weapon:transformEquipTo(itemid)
    transformEquipTo(itemid: number): boolean;

    // weapon:transformDeEquipTo(itemid)
    transformDeEquipTo(itemid: number): boolean;

    // weapon:shootType(type)
    shootType(type: ShootType): boolean;

    // weapon:slotType(slot)
    slotType(slot: 'two-handed' | 'one-handed'): boolean;

    // weapon:ammoType(type)
    ammoType(type: 'arrow' | 'bolt'): boolean;

    // weapon:hitChance(chance)
    hitChance(chance: number): boolean;

    // weapon:maxHitChance(max)
    maxHitChance(max: number): boolean;

    // weapon:extraElement(atk, combatType)
    extraElement(atk: number, combatType: CombatType | WeaponElementType): boolean;
  }

  type WeaponActionType = 'removecount' | 'removecharge' | 'move';
  type WeaponElementType = 'earth' | 'ice' | 'energy' | 'fire' | 'death' | 'holy';
}

export {};