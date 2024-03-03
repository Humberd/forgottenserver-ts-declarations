declare global {
  const Loot: {
    // Loot()
    (this: void): Loot;
  };

  interface Loot {
    // loot:delete() loot:__gc()
    delete(): void;

    // loot:setId(id or name)
    setId(id: number | string): boolean;

    // loot:setSubType(type)
    setSubType(type: number): boolean;

    // loot:setChance(chance)
    setChance(chance: number): boolean;

    // loot:setMaxCount(max)
    setMaxCount(max: number): boolean;

    // loot:setActionId(actionid)
    setActionId(actionid: number): boolean;

    // loot:setDescription(desc)
    setDescription(desc: string): boolean;

    // loot:addChildLoot(loot)
    addChildLoot(loot: Loot): boolean;
  }
}

export {};