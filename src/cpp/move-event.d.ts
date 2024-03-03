declare global {
  const MoveEvent: {
    // MoveEvent()
    (this: void): MoveEvent;
  };

  interface MoveEvent {
    // moveevent:type(callback)
    type(callback: MoveEventType): boolean;

    // moveevent:register()
    register(): boolean;

    // moveevent:onEquip / deEquip / etc. (callback)
    onEquip(callback: OnEquip): boolean;

    onDeEquip(callback: OnDeEquip): boolean;

    onStepIn(callback: OnStepIn): boolean;

    onStepOut(callback: OnStepOut): boolean;

    onAddItem(callback: OnAddItem): boolean;

    onRemoveItem(callback: OnRemoveItem): boolean;

    // moveevent:slot(slot)
    slot(slot: MoveEventSlot): boolean;

    // moveevent:level(lvl)
    level(lvl: number): boolean;

    // moveevent:magicLevel(lvl)
    magicLevel(lvl: number): boolean;

    // moveevent:premium(bool)
    premium(bool: boolean): boolean;

    // moveevent:vocation(vocName[, showInDescription = false, lastVoc = false])
    vocation(vocName: string, showInDescription?: boolean, lastVoc?: boolean): boolean;

    // moveevent:tileItem(bool)
    tileItem(bool: boolean): boolean;

    // moveevent:id(ids) -- Itemid
    id(...ids: number[]): boolean;

    // moveevent:aid(ids) -- Actionid
    aid(...aids: number[]): boolean;

    // moveevent:uid(uids) -- Uniqueid
    uid(...uids: number[]): boolean;

    // moveevent:position(positions)
    position(...positions: Position[]): boolean;
  }

  type MoveEventType = | 'stepin' | 'stepout' | 'equip' | 'deequip' | 'additem' | 'removeitem';
  type MoveEventSlot =
      | 'head'
      | 'necklace'
      | 'backpack'
      | 'armor'
      | 'body'
      | 'right-hand'
      | 'left-hand'
      | 'hand'
      | 'shield'
      | 'legs'
      | 'feet'
      | 'ring'
      | 'ammo';
}

export {};