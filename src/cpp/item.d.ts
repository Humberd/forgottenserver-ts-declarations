declare global {
  const Item: {
    // Item(uid)
    (this: void, uid: number): Item | null;
  };

  interface Item extends Thing, _ItemLuaLib {
    get uid(): number;

    get itemid(): number;

    get actionid(): number;

    get type(): number;

    // item:isItem()
    isItem(): this is Item;

    // item:getParent()
    getParent(): Cylinder | null;

    // item:getTopParent()
    getTopParent(): Cylinder | null;

    // item:getId()
    getId(): number;

    // item:clone()
    clone(): Item | null;

    // item:split([count = 1])
    split(count?: number): Item | null;

    // item:remove([count = -1])
    remove(count?: number): boolean;

    // item:getUniqueId()
    getUniqueId(): number;

    // item:getActionId()
    getActionId(): number;

    // item:setActionId(actionId)
    setActionId(actionId: number): boolean;

    // item:getCount()
    getCount(): number;

    // item:getCharges()
    getCharges(): number;

    // item:getFluidType()
    getFluidType(): number;

    // item:getWeight()
    getWeight(): number;

    // item:getWorth()
    getWorth(): number;

    // item:getSubType()
    getSubType(): number;

    // item:getName()
    getName(): string;

    // item:getPluralName()
    getPluralName(): string;

    // item:getArticle()
    getArticle(): string;

    // item:getPosition()
    getPosition(): Position;

    // item:getTile()
    getTile(): Tile | null;

    // item:hasAttribute(key)
    hasAttribute(key: ItemAttrTypes): boolean;

    // item:getAttribute(key)
    getAttribute(key: ItemAttrTypes): number | string | null;

    // item:setAttribute(key, value)
    setAttribute(key: ItemAttrTypes, value: number | string): boolean;

    // item:removeAttribute(key)
    removeAttribute(key: ItemAttrTypes): boolean;

    // item:getCustomAttribute(key)
    getCustomAttribute(key: number | string): any;

    // item:setCustomAttribute(key, value)
    setCustomAttribute(key: number | string, value: any): boolean;

    // item:removeCustomAttribute(key)
    removeCustomAttribute(key: number | string): boolean;

    // item:moveTo(position or cylinder[, flags])
    moveTo(position: Position | Cylinder, flags?: CylinderFlags): boolean;

    // item:transform(itemId[, count/subType = -1])
    transform(itemId: number, count?: number): boolean;

    // item:decay(decayId)
    decay(decayId: number): boolean;

    // item:getSpecialDescription()
    getSpecialDescription(): string;

    // item:hasProperty(property)
    hasProperty(property: ItemProperty): boolean;

    // item:isLoadedFromMap()
    isLoadedFromMap(): boolean;

    // item:setStoreItem(storeItem)
    setStoreItem(storeItem: boolean): void;

    // item:isStoreItem()
    isStoreItem(): boolean;

    // item:setReflect(combatType, reflect)
    setReflect(combatType: CombatType, reflect: Reflect): boolean;

    // item:getReflect(combatType[, total = true])
    getReflect(combatType: CombatType, total?: boolean): Reflect;

    // item:setBoostPercent(combatType, percent)
    setBoostPercent(combatType: CombatType, percent: number): boolean;

    // item:getBoostPercent(combatType[, total = true])
    getBoostPercent(combatType: CombatType, total?: boolean): number;
  }

  // METHODS DEFINED IN LUA SCRIPTS
  interface _ItemLuaLib {
    getType(): ItemType;
  }

  interface Reflect {
    percent: number;
    chance: number;
  }

  /** @compileMembersOnly */
  enum ItemAttrTypes {
    ITEM_ATTRIBUTE_NONE,

    ITEM_ATTRIBUTE_ACTIONID,
    ITEM_ATTRIBUTE_UNIQUEID,
    ITEM_ATTRIBUTE_DESCRIPTION,
    ITEM_ATTRIBUTE_TEXT,
    ITEM_ATTRIBUTE_DATE,
    ITEM_ATTRIBUTE_WRITER,
    ITEM_ATTRIBUTE_NAME,
    ITEM_ATTRIBUTE_ARTICLE,
    ITEM_ATTRIBUTE_PLURALNAME,
    ITEM_ATTRIBUTE_WEIGHT,
    ITEM_ATTRIBUTE_ATTACK,
    ITEM_ATTRIBUTE_DEFENSE,
    ITEM_ATTRIBUTE_EXTRADEFENSE,
    ITEM_ATTRIBUTE_ARMOR,
    ITEM_ATTRIBUTE_HITCHANCE,
    ITEM_ATTRIBUTE_SHOOTRANGE,
    ITEM_ATTRIBUTE_OWNER,
    ITEM_ATTRIBUTE_DURATION,
    ITEM_ATTRIBUTE_DECAYSTATE,
    ITEM_ATTRIBUTE_CORPSEOWNER,
    ITEM_ATTRIBUTE_CHARGES,
    ITEM_ATTRIBUTE_FLUIDTYPE,
    ITEM_ATTRIBUTE_DOORID,
    ITEM_ATTRIBUTE_DECAYTO,
    ITEM_ATTRIBUTE_WRAPID,
    ITEM_ATTRIBUTE_STOREITEM,
    ITEM_ATTRIBUTE_ATTACK_SPEED,
    ITEM_ATTRIBUTE_CUSTOM,
  }

  /** @compileMembersOnly */
  enum ItemProperty {
    CONST_PROP_BLOCKSOLID = 0,
    CONST_PROP_HASHEIGHT,
    CONST_PROP_BLOCKPROJECTILE,
    CONST_PROP_BLOCKPATH,
    CONST_PROP_ISVERTICAL,
    CONST_PROP_ISHORIZONTAL,
    CONST_PROP_MOVEABLE,
    CONST_PROP_IMMOVABLEBLOCKSOLID,
    CONST_PROP_IMMOVABLEBLOCKPATH,
    CONST_PROP_IMMOVABLENOFIELDBLOCKPATH,
    CONST_PROP_NOFIELDBLOCKPATH,
    CONST_PROP_SUPPORTHANGABLE,
  }
}

export {};