declare global {
  const Container: {
    // Container(uid)
    (this: void, uid: number): Container | null
  }

  interface Container extends Item {
    // container:getSize()
    getSize(): number;

    // container:getCapacity()
    getCapacity(): number;

    // container:getEmptySlots([recursive = false])
    getEmptySlots(recursive?: boolean): number;

    // container:getItemHoldingCount()
    getItemHoldingCount(): number;

    // container:getItem(index)
    getItem(index: number): Item;

    // container:hasItem(item)
    hasItem(item: Item): boolean;

    // container:addItem(itemId[, count/subType = 1[, index = INDEX_WHEREEVER[, flags = 0]]])
    addItem(item: number | string, count?: number, index?: number, flags?: CylinderFlags): Item;

    // container:addItemEx(item[, index = INDEX_WHEREEVER[, flags = 0]])
    addItemEx(item: Item, index?: number, flags?: CylinderFlags): number;

    // container:getCorpseOwner()
    getCorpseOwner(): number;
  }
}

export {};