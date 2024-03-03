declare global {
  type OnSay = (
      this: void,
      player: Player,
      words: string,
      param: string,
  ) => boolean;

  // CreatureEvents
  type OnLogin = (
      this: void,
      player: Player,
  ) => boolean;

  type OnLogout = (
      this: void,
      player: Player,
  ) => boolean;

  type OnThink = (
      this: void,
      creature: Creature,
      interval: number,
  ) => boolean;

  type OnPrepareDeath = (
      this: void,
      creature: Creature,
      killer: Creature,
  ) => boolean;

  type OnDeath = (
      this: void,
      creature: Creature,
      corpse: Item,
      killer: Creature,
      mostDamageKiller: Creature,
      lastHitUnjustified: boolean,
      mostDamageUnjustified: boolean,
  ) => boolean;

  type OnKill = (
      this: void,
      creature: Creature,
      target: Creature,
  ) => boolean;

  type OnAdvance = (
      this: void,
      player: Player,
      skill: skills,
      oldLevel: number,
      newLevel: number,
  ) => boolean;

  type OnModalWindow = (
      this: void,
      player: Player,
      modalWindowId: number,
      buttonId: number,
      choiceId: number,
  ) => boolean;

  type OnTextEdit = (
      this: void,
      player: Player,
      item: Item,
      text: string,
  ) => boolean;

  type OnHealthChange = (
      this: void,
      creature: Creature,
      attacker: Creature,
      primaryDamage: number,
      primaryType: CombatType,
      secondaryDamage: number,
      secondaryType: CombatType,
      origin: CombatOrigin,
  ) => [primaryDamage: number, primaryType: CombatType, secondaryDamage: number, secondaryType: CombatType];

  type OnManaChange = (
      this: void,
      creature: Creature,
      attacker: Creature,
      primaryDamage: number,
      primaryType: CombatType,
      secondaryDamage: number,
      secondaryType: CombatType,
      origin: CombatOrigin,
  ) => [primaryDamage: number, primaryType: CombatType, secondaryDamage: number, secondaryType: CombatType];

  type OnExtendedOpcode = (
      this: void,
      player: Player,
      opcode: number,
      buffer: string,
  ) => boolean;

  type OnUse = (
      this: void,
      player: Player,
      item: Item,
      fromPosition: Position,
      target: Thing,
      toPosition: Position,
      isHotkey: boolean,
  ) => boolean;

  // MoveEvents
  type OnEquip = (
      this: void,
      player: Player,
      item: Item,
      slot: Slots,
      isCheck: boolean,
  ) => boolean;

  type OnDeEquip = (
      this: void,
      player: Player,
      item: Item,
      slot: Slots,
  ) => boolean;

  type OnStepIn = (
      this: void,
      creature: Creature,
      item: Item,
      fromPosition: Position,
      toPosition: Position,
  ) => boolean;

  type OnStepOut = (
      this: void,
      creature: Creature,
      item: Item,
      fromPosition: Position,
      toPosition: Position,
  ) => boolean;

  type OnAddItem = (
      this: void,
      item: Item,
      tile: Tile,
      position: Position,
  ) => boolean;

  type OnRemoveItem = (
      this: void,
      item: Item,
      tile: Tile,
      position: Position,
  ) => boolean;

  // GlobalEvents
  type OnStartup = (
      this: void,
  ) => boolean;

  type OnShutdown = (
      this: void,
  ) => boolean;

  type OnRecord = (
      this: void,
  ) => boolean;

  type OnSave = (
      this: void,
  ) => boolean;

  type OnTime = (
      this: void,
  ) => boolean;

  type OnThinkGlobal = (
      this: void,
      interval: number,
  ) => boolean;

  // Migrations
  type OnUpdateDatabase = (
      this: void,
  ) => boolean;
}

export {};