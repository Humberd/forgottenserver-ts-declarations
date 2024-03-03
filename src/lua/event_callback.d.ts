declare global {
  const EventCallback: EventCallback;

  interface EventCallback {
    // Monster:onSpawn(position, startup, artificial)
    onSpawn: OnSpawn;

    // Creature:onChangeOutfit(outfit)
    onChangeOutfit: OnChangeOutfit;

    // Creature:onAreaCombat(tile, aggressive)
    onAreaCombat: OnAreaCombat;

    // Creature:onTargetCombat(target)
    onTargetCombat: OnTargetCombat;

    // Creature:onHear(speaker, words, type)
    onHear: OnHear;

    // Party:onJoin(player)
    onJoin: OnJoin;

    // Party:onLeave(player)
    onLeave: OnLeave;

    // Party:onDisband()
    onDisband: OnDisband;

    // Party:onShareExperience(exp)
    onShareExperience: OnShareExperience;

    // Player:onBrowseField(position)
    onBrowseField: OnBrowseField;

    // Player:onLook(position, thing, stackpos, lookDistance)
    onLook: OnLook;

    // Player:onLookInBattleList(creature, lookDistance)
    onLookInBattleList: OnLookInBattleList;

    // Player:onLookInTrade(partner, item, lookDistance)
    onLookInTrade: OnLookInTrade;

    // Player:onLookInShop(itemType, count, description)
    onLookInShop: OnLookInShop;

    // Player:onMoveItem(item, count, fromPosition, toPosition, fromCylinder, toCylinder)
    onMoveItem: OnMoveItem;

    // Player:onItemMoved(item, count, fromPosition, toPosition, fromCylinder, toCylinder)
    onItemMoved: OnItemMoved;

    // Player:onMoveCreature(creature, fromPosition, toPosition)
    onMoveCreature: OnMoveCreature;

    // Player:onReportRuleViolation(targetName, reportType, reportReason, comment, translation)
    onReportRuleViolation: OnReportRuleViolation;

    // Player:onReportBug(message, position, category)
    onReportBug: OnReportBug;

    // Player:onTurn(direction)
    onTurn: OnTurn;

    // Player:onTradeRequest(target, item)
    onTradeRequest: OnTradeRequest;

    // Player:onTradeAccept(target, item, targetItem)
    onTradeAccept: OnTradeAccept;

    // Player:onTradeCompleted(target, item, targetItem, isSuccess)
    onTradeCompleted: OnTradeCompleted;

    // Player:onGainExperience(source, exp, rawExp)
    onGainExperience: OnGainExperience;

    // Player:onLoseExperience(exp)
    onLoseExperience: OnLoseExperience;

    // Player:onGainSkillTries(skill, tries)
    onGainSkillTries: OnGainSkillTries;

    // Player:onWrapItem(item)
    onWrapItem: OnWrapItem;

    // Monster:onDropLoot(corpse)
    onDropLoot: OnDropLoot;

    // eventCallback:register(index)
    register(index?: number): boolean;

    // eventCallback:clear()
    clear(): boolean;
  }

  type OnSpawn = (
      this: Monster,
      position: Position,
      startup: boolean,
      artificial: boolean,
  ) => boolean;

  type OnChangeOutfit = (
      this: Creature,
      outfit: Outfit,
  ) => boolean;

  type OnAreaCombat = (
      this: Creature,
      tile: Tile,
      aggressive: boolean,
  ) => ReturnValue;

  type OnTargetCombat = (
      this: Creature,
      target: Creature,
  ) => ReturnValue;

  type OnHear = (
      this: Creature,
      speaker: Creature,
      words: string,
      type: SpeakClasses,
  ) => void;

  type OnJoin = (
      this: Party,
      player: Player,
  ) => boolean;

  type OnLeave = (
      this: Party,
      player: Player,
  ) => boolean;

  type OnDisband = (
      this: Party
  ) => boolean;

  type OnShareExperience = (
      this: Party,
      exp: number,
  ) => void;

  type OnBrowseField = (
      this: Player,
      position: Position,
  ) => boolean;

  type OnLook = (
      this: Player,
      position: Position,
      thing: Thing,
      stackpos: number,
      lookDistance: number,
  ) => void;

  type OnLookInBattleList = (
      this: Player,
      creature: Creature,
      lookDistance: number,
  ) => void;

  type OnLookInTrade = (
      this: Player,
      partner: Player,
      item: Item,
      lookDistance: number,
  ) => void;

  type OnLookInShop = (
      this: Player,
      itemType: ItemType,
      count: number,
      description: string,
  ) => boolean;

  type OnMoveItem = (
      this: Player,
      item: Item,
      count: number,
      fromPosition: Position,
      toPosition: Position,
      fromCylinder: Cylinder,
      toCylinder: Cylinder,
  ) => ReturnValue;

  type OnItemMoved = (
      this: Player,
      item: Item,
      count: number,
      fromPosition: Position,
      toPosition: Position,
      fromCylinder: Cylinder,
      toCylinder: Cylinder,
  ) => void;

  type OnMoveCreature = (
      this: Player,
      creature: Creature,
      fromPosition: Position,
      toPosition: Position,
  ) => ReturnValue;

  type OnReportRuleViolation = (
      this: Player,
      targetName: string,
      reportType: number,
      reportReason: number,
      comment: string,
      translation: string,
  ) => void;

  type OnReportBug = (
      this: Player,
      message: string,
      position: Position,
      category: number,
  ) => ReturnValue;

  type OnTurn = (
      this: Player,
      direction: Direction,
  ) => ReturnValue;

  type OnTradeRequest = (
      this: Player,
      target: Player,
      item: Item,
  ) => ReturnValue;

  type OnTradeAccept = (
      this: Player,
      target: Player,
      item: Item,
      targetItem: Item,
  ) => ReturnValue;

  type OnTradeCompleted = (
      this: Player,
      target: Player,
      item: Item,
      targetItem: Item,
      isSuccess: boolean,
  ) => void;

  type OnGainExperience = (
      this: Player,
      source: Creature,
      exp: number,
      rawExp: number,
  ) => void;

  type OnLoseExperience = (
      this: Player,
      exp: number,
  ) => void;

  type OnGainSkillTries = (
      this: Player,
      skill: skills,
      tries: number,
  ) => void;

  type OnWrapItem = (
      this: Player,
      item: Item,
  ) => void;

  type OnDropLoot = (
      this: Monster,
      corpse: Container,
  ) => void;
}

export {};
