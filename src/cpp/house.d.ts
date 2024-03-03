declare global {
  const House: {
    // House(id)
    (this: void, id: number): House | null;
  };

  interface House {
    // house:getId()
    getId(): number;

    // house:getName()
    getName(): string;

    // house:getTown()
    getTown(): Town | null;

    // house:getExitPosition()
    getExitPosition(): Position | null;

    // house:getRent()
    getRent(): number;

    // house:setRent(rent)
    setRent(rent: number): boolean;

    // house:getPaidUntil()
    getPaidUntil(): number;

    // house:setPaidUntil(timestamp)
    setPaidUntil(timestamp: number): boolean;

    // house:getPayRentWarnings()
    getPayRentWarnings(): number;

    // house:setPayRentWarnings(warnings)
    setPayRentWarnings(warnings: number): boolean;

    // house:getOwnerName()
    getOwnerName(): string;

    // house:getOwnerGuid()
    getOwnerGuid(): number;

    // house:setOwnerGuid(guid[, updateDatabase = true])
    setOwnerGuid(guid: number, updateDatabase?: boolean): boolean;

    // house:startTrade(player, tradePartner)
    startTrade(player: Player, tradePartner: Player): boolean;

    // house:getBeds()
    getBeds(): Item[];

    // house:getBedCount()
    getBedCount(): number;

    // house:getDoors()
    getDoors(): Item[];

    // house:getDoorCount()
    getDoorCount(): number;

    // house:getDoorIdByPosition(position)
    getDoorIdByPosition(position: Position): number | null;

    // house:getTiles()
    getTiles(): Tile[];

    // house:getItems()
    getItems(): Item[];

    // house:getTileCount()
    getTileCount(): number;

    // house:canEditAccessList(listId, player)
    canEditAccessList(listId: HouseAccessList, player: Player): boolean;

    // house:getAccessList(listId)
    getAccessList(listId: HouseAccessList): string | null;

    // house:setAccessList(listId, list)
    setAccessList(listId: HouseAccessList, list: string): void;

    // house:kickPlayer(player, targetPlayer)
    kickPlayer(player: Player, targetPlayer: Player): boolean;

    // house:save()
    save(): boolean;
  }

  /** @compileMembersOnly */
  enum HouseAccessList {
    GUEST_LIST = 0x100,
    SUBOWNER_LIST = 0x101,
  }
}

export {};