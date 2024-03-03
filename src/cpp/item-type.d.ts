declare global {
  const ItemType: {
    // ItemType(id or name)
    (this: void, id: number): ItemType | null;
    (this: void, name: string): ItemType | null;
  }

  interface ItemType {
    // itemType:isCorpse()
    isCorpse(): boolean;

    // itemType:isDoor()
    isDoor(): boolean;

    // itemType:isContainer()
    isContainer(): boolean;

    // itemType:isFluidContainer()
    isFluidContainer(): boolean;

    // itemType:isMovable()
    isMovable(): boolean;

    // itemType:isRune()
    isRune(): boolean;

    // itemType:isStackable()
    isStackable(): boolean;

    // itemType:isReadable()
    isReadable(): boolean;

    // itemType:isWritable()
    isWritable(): boolean;

    // itemType:isBlocking()
    isBlocking(): boolean;

    // itemType:isGroundTile()
    isGroundTile(): boolean;

    // itemType:isMagicField()
    isMagicField(): boolean;

    // itemType:isUseable()
    isUseable(): boolean;

    // itemType:isPickupable()
    isPickupable(): boolean;

    // itemType:isRotatable()
    isRotatable(): boolean;

    // itemType:getType()
    getType(): ItemTypes;

    // itemType:getGroup()
    getGroup(): ItemGroup;

    // itemType:getId()
    getId(): number;

    // itemType:getClientId()
    getClientId(): number;

    // itemType:getName()
    getName(): string;

    // itemType:getPluralName()
    getPluralName(): string;

    // itemType:getRotateTo()
    getRotateTo(): number;

    // itemType:getArticle()
    getArticle(): string;

    // itemType:getDescription()
    getDescription(): string;

    // itemType:getSlotPosition()
    getSlotPosition(): ItemSlotPosition;

    // itemType:getCharges()
    getCharges(): number;

    // itemType:getFluidSource()
    getFluidSource(): number;

    // itemType:getCapacity()
    getCapacity(): number;

    // itemType:getWeight([count = 1])
    getWeight(count?: number): number;

    // itemType:getWorth()
    getWorth(): number;

    // itemType:getHitChance()
    getHitChance(): number;

    // itemType:getShootRange()
    getShootRange(): number;

    // itemType:getAttack()
    getAttack(): number;

    // itemType:getAttackSpeed()
    getAttackSpeed(): number;

    // itemType:getDefense()
    getDefense(): number;

    // itemType:getExtraDefense()
    getExtraDefense(): number;

    // itemType:getArmor()
    getArmor(): number;

    // itemType:getWeaponType()
    getWeaponType(): WeaponType;

    // itemType:getAmmoType()
    getAmmoType(): Ammo;

    // itemType:getCorpseType()
    getCorpseType(): RaceType;

    // itemType:getClassification()
    getClassification(): number;

    // itemType:getAbilities()
    getAbilities(): Abilities;

    // itemType:hasShowAttributes()
    hasShowAttributes(): boolean;

    // itemType:hasShowCount()
    hasShowCount(): boolean;

    // itemType:hasShowCharges()
    hasShowCharges(): boolean;

    // itemType:hasShowDuration()
    hasShowDuration(): boolean;

    // itemType:hasAllowDistRead()
    hasAllowDistRead(): boolean;

    // itemType:getWieldInfo()
    getWieldInfo(): number;

    // itemType:getDuration()
    getDuration(): number;

    // itemType:getLevelDoor()
    getLevelDoor(): number;

    // itemType:getRuneSpellName()
    getRuneSpellName(): string;

    // itemType:getVocationString()
    getVocationString(): string;

    // itemType:getMinReqLevel()
    getMinReqLevel(): number;

    // itemType:getMinReqMagicLevel()
    getMinReqMagicLevel(): number;

    // itemType:getMarketBuyStatistics()
    getMarketBuyStatistics(): MarketStatistics | null;

    // itemType:getMarketSellStatistics()
    getMarketSellStatistics(): MarketStatistics | null;

    // itemType:getElementType()
    getElementType(): CombatType;

    // itemType:getElementDamage()
    getElementDamage(): number;

    // itemType:getTransformEquipId()
    getTransformEquipId(): number;

    // itemType:getTransformDeEquipId()
    getTransformDeEquipId(): number;

    // itemType:getDestroyId()
    getDestroyId(): number;

    // itemType:getDecayId()
    getDecayId(): number;

    // itemType:getRequiredLevel()
    getRequiredLevel(): number;

    // itemType:hasSubType()
    hasSubType(): boolean;

    // itemType:isStoreItem()
    isStoreItem(): boolean;
  }

  /** @compileMembersOnly */
  enum ItemGroup {

  }

  /** @compileMembersOnly */
  enum ItemTypes {
    ITEM_TYPE_NONE,
    ITEM_TYPE_DEPOT,
    ITEM_TYPE_MAILBOX,
    ITEM_TYPE_TRASHHOLDER,
    ITEM_TYPE_CONTAINER,
    ITEM_TYPE_DOOR,
    ITEM_TYPE_MAGICFIELD,
    ITEM_TYPE_TELEPORT,
    ITEM_TYPE_BED,
    ITEM_TYPE_KEY,
    ITEM_TYPE_RUNE,
    ITEM_TYPE_LAST
  }

  /** @compileMembersOnly */
  enum ItemSlotPosition {
    SLOTP_WHEREEVER,
    SLOTP_HEAD,
    SLOTP_NECKLACE,
    SLOTP_BACKPACK,
    SLOTP_ARMOR,
    SLOTP_RIGHT,
    SLOTP_LEFT,
    SLOTP_LEGS,
    SLOTP_FEET,
    SLOTP_RING,
    SLOTP_AMMO,
    SLOTP_DEPOT,
    SLOTP_TWO_HAND,
    SLOTP_HAND
  }

  interface Abilities {
    healthGain: number;
    healthTicks: number;
    manaGain: number;
    manaTicks: number;
    conditionImmunities: number;
    conditionSuppressions: number;
    speed: number;
    elementDamage: number;
    elementType: CombatType;
    manaShield: boolean;
    invisible: boolean;
    regeneration: boolean;
    stats: number[];
    statsPercent: number[];
    skills: number[];
    specialSkills: number[];
    fieldAbsorbPercent: number[];
    absorbPercent: number[];
    specialMagicLevelSkill: number[];
    boostPercent: number[];
    reflectChance: number[];
    reflectPercent: number[];
  }

  interface MarketStatistics {
    numTransactions: number;
    totalPrice: number;
    highestPrice: number;
    lowestPrice: number;
  }
}

export {};