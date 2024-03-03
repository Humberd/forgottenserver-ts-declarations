declare global {
  //doPlayerAddItem(uid, itemid, <optional: default: 1> count/subtype)
  //doPlayerAddItem(cid, itemid, <optional: default: 1> count, <optional: default: 1> canDropOnMap, <optional: default: 1>subtype)
  //Returns uid of the created item
  function doPlayerAddItem(
      this: void,
      uid: number,
      itemId: number,
      count?: number,
      canDropOnMap?: boolean,
      subtype?: number,
  ): number;

  //isValidUID(uid)
  function isValidUID(this: void, uid: number): boolean;

  //isDepot(uid)
  function isDepot(this: void, uid: number): boolean;

  //isMovable(uid)
  function isMovable(this: void, uid: number): boolean;

  //doAddContainerItem(uid, itemid, <optional> count/subtype)
  function doAddContainerItem(this: void, uid: number, itemid: number, count?: number): number;

  //getDepotId(uid)
  function getDepotId(this: void, uid: number): number;

  //getWorldTime()
  function getWorldTime(this: void): number;

  //getWorldLight()
  function getWorldLight(this: void): number;

  //setWorldLight(level, color)
  function setWorldLight(this: void, level: number, color: number): boolean;

  //getWorldUpTime()
  function getWorldUpTime(this: void): number;

  // getSubTypeName(subType)
  function getSubTypeName(this: void, subType: number): string;

  //createCombatArea( {area}, <optional> {extArea} )
  function createCombatArea(this: void, area: number[], extArea?: number[]): number;

  //doAreaCombat(cid, type, pos, area, min, max, effect[, origin = ORIGIN_SPELL[, blockArmor = false[, blockShield = false[, ignoreResistances = false]]]])
  function doAreaCombat(
      this: void,
      cid: Creature,
      type: Creature,
      pos: Position,
      area: number,
      min: number,
      max: number,
      effect: number,
      origin?: CombatOrigin,
      blockArmor?: boolean,
      blockShield?: boolean,
      ignoreResistances?: boolean,
  ): boolean;

  //doTargetCombat(cid, target, type, min, max, effect[, origin = ORIGIN_SPELL[, blockArmor = false[, blockShield = false[, ignoreResistances = false]]]])
  function doTargetCombat(
      this: void,
      cid: Creature,
      target: Creature,
      type: CombatType,
      min: number,
      max: number,
      effect: number,
      origin?: CombatOrigin,
      blockArmor?: boolean,
      blockShield?: boolean,
      ignoreResistances?: boolean,
  ): boolean;

  //doChallengeCreature(cid, target[, force = false])
  function doChallengeCreature(this: void, cid: number, target: number, force?: boolean): boolean;

  //addEvent(callback, delay, ...)
  function addEvent<T extends any[]>(this: void, callback: (...args: T) => void, delay: number, ...args: T): number;

  //stopEvent(eventid)
  function stopEvent(this: void, eventId: number): boolean;

  //saveServer()
  function saveServer(this: void): boolean;

  //cleanMap()
  function cleanMap(this: void): number;

  //debugPrint(text)
  function debugPrint(this: void, text: string): void;

  //isInWar(cid, target)
  function isInWar(this: void, cid: number, target: number): boolean;

  //getWaypointPosition(name)
  function getWaypointPosition(this: void, name: string): Position;

  //sendChannelMessage(channelId, type, message)
  function sendChannelMessage(this: void, channelId: number, type: SpeakClasses, message: string): boolean;

  //sendGuildChannelMessage(guildId, type, message)
  function sendGuildChannelMessage(this: void, guildId: number, type: SpeakClasses, message: string): boolean;

  //isScriptsInterface()
  function isScriptsInterface(this: void): boolean;

  type UniqueId = number;
  type ActionId = number;
  type ItemId = number;
  type CreatureId = number;
  type PlayerId = number;
  type GuildId = number;
  type ChannelId = number;
  type HouseId = number;
  type DepotId = number;
  type ContainerId = number;

  /**
   * Each migration file should override this function to update the database.
   */
  let onUpdateDatabase: OnUpdateDatabase;
}

export {};