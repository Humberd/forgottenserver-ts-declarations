declare global {
  const Tile: {
    // Tile(x, y, z)
    // Tile(position)
    (this: void, x: number, y: number, z: number): Tile | null;
    (this: void, position: Position): Tile | null;
  };

  interface Tile extends Item {
    // tile:remove()
    remove(): boolean;

    // tile:getPosition()
    getPosition(): Position;

    // tile:getGround()
    getGround(): Item;

    // tile:getThing(index)
    getThing(index: number): Thing;

    // tile:getThingCount()
    getThingCount(): number;

    // tile:getTopVisibleThing(creature)
    getTopVisibleThing(creature: Creature): Thing;

    // tile:getTopTopItem()
    getTopTopItem(): Item;

    // tile:getTopDownItem()
    getTopDownItem(): Item;

    // tile:getFieldItem()
    getFieldItem(): Item;

    // tile:getItemById(itemId[, subType = -1])
    getItemById(itemId: number, subType?: number): Item;

    // tile:getItemByType(itemType)
    getItemByType(itemType: ItemType): Item;

    // tile:getItemByTopOrder(topOrder)
    getItemByTopOrder(topOrder: number): Item;

    // tile:getItemCountById(itemId[, subType = -1])
    getItemCountById(itemId: number, subType?: number): number;

    // tile:getBottomCreature()
    getBottomCreature(): Creature;

    // tile:getTopCreature()
    getTopCreature(): Creature;

    // tile:getBottomVisibleCreature(creature)
    getBottomVisibleCreature(creature: Creature): Creature;

    // tile:getTopVisibleCreature(creature)
    getTopVisibleCreature(creature: Creature): Creature;

    // tile:getItems()
    getItems(): Item[];

    // tile:getItemCount()
    getItemCount(): number;

    // tile:getDownItemCount()
    getDownItemCount(): number;

    // tile:getTopItemCount()
    getTopItemCount(): number;

    // tile:getCreatures()
    getCreatures(): Creature[];

    // tile:getCreatureCount()
    getCreatureCount(): number;

    // tile:hasProperty(property[, item])
    hasProperty(property: number, item?: Item): boolean;

    // tile:getThingIndex(thing)
    getThingIndex(thing: Thing): number;

    // tile:hasFlag(flag)
    hasFlag(flag: TileFlags): boolean;

    // tile:queryAdd(thing[, flags])
    queryAdd(thing: Thing, flags?: CylinderFlags): number;

    // tile:addItem(itemId[, count/subType = 1[, flags = 0]])
    addItem(itemId: number, count?: number, flags?: CylinderFlags): Item;

    // tile:addItemEx(item[, flags = 0])
    addItemEx(item: Item, flags?: CylinderFlags): number;

    // tile:getHouse()
    getHouse(): House;
  }

  /** @compileMembersOnly */
  enum TileFlags {
    TILESTATE_FLOORCHANGE_DOWN = 1 << 0,
    TILESTATE_FLOORCHANGE_NORTH = 1 << 1,
    TILESTATE_FLOORCHANGE_SOUTH = 1 << 2,
    TILESTATE_FLOORCHANGE_EAST = 1 << 3,
    TILESTATE_FLOORCHANGE_WEST = 1 << 4,
    TILESTATE_FLOORCHANGE_SOUTH_ALT = 1 << 5,
    TILESTATE_FLOORCHANGE_EAST_ALT = 1 << 6,
    TILESTATE_PROTECTIONZONE = 1 << 7,
    TILESTATE_NOPVPZONE = 1 << 8,
    TILESTATE_NOLOGOUT = 1 << 9,
    TILESTATE_PVPZONE = 1 << 10,
    TILESTATE_TELEPORT = 1 << 11,
    TILESTATE_MAGICFIELD = 1 << 12,
    TILESTATE_MAILBOX = 1 << 13,
    TILESTATE_TRASHHOLDER = 1 << 14,
    TILESTATE_BED = 1 << 15,
    TILESTATE_DEPOT = 1 << 16,
    TILESTATE_BLOCKSOLID = 1 << 17,
    TILESTATE_BLOCKPATH = 1 << 18,
    TILESTATE_IMMOVABLEBLOCKSOLID = 1 << 19,
    TILESTATE_IMMOVABLEBLOCKPATH = 1 << 20,
    TILESTATE_IMMOVABLENOFIELDBLOCKPATH = 1 << 21,
    TILESTATE_NOFIELDBLOCKPATH = 1 << 22,
    TILESTATE_SUPPORTS_HANGABLE = 1 << 23,

    TILESTATE_FLOORCHANGE = TILESTATE_FLOORCHANGE_DOWN | TILESTATE_FLOORCHANGE_NORTH | TILESTATE_FLOORCHANGE_SOUTH | TILESTATE_FLOORCHANGE_EAST | TILESTATE_FLOORCHANGE_WEST | TILESTATE_FLOORCHANGE_SOUTH_ALT | TILESTATE_FLOORCHANGE_EAST_ALT,
  }
}
export {};