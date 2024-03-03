declare global {
  class Thing {
    protected constructor();
    isContainer(): this is Container;
    isCreature(): this is Creature;
    isMonster(): this is Monster;
    isNpc(): this is Npc;
    isPlayer(): this is Player;
    isTeleport(): this is Teleport;
    isTile(): this is Tile;
    isItem(): this is Item;
  }
}

export {};