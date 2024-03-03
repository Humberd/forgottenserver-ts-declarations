declare global {
  const Action: {
    // Action()
    (this: void): Action;
  };

  interface Action {
    // action:onUse(callback)
    onUse(callback: OnUse): boolean;

    // action:register()
    register(): boolean;

    // action:id(ids) - ActionItemid
    id(...ids: number[]): boolean;

    // action:aid(aids) - ActionActionid
    aid(...aids: number[]): boolean;

    // action:uid(uids) - ActionUniqueid
    uid(...uids: number[]): boolean;

    // action:allowFarUse(bool)
    allowFarUse(bool: boolean): boolean;

    // action:blockWalls(bool)
    blockWalls(bool: boolean): boolean;

    // action:checkFloor(bool)
    checkFloor(bool: boolean): boolean;
  }
}

export {};