declare global {
  const Group: {
    // Group(id)
    (this: void, id: number): Group | null;
  }

  interface Group {
    // group:getId()
    getId(): number;

    // group:getName()
    getName(): string;

    // group:getFlags()
    getFlags(): number;

    // group:getAccess()
    getAccess(): boolean;

    // group:getMaxDepotItems()
    getMaxDepotItems(): number;

    // group:getMaxVipEntries()
    getMaxVipEntries(): number;

    // group:hasFlag(flag)
    hasFlag(flag: PlayerFlags): boolean;
  }
}

export {};