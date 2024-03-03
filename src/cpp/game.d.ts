declare global {
  const Game: Game;

  interface Game {
    // Game.getSpectators(position[, multifloor = false[, onlyPlayer = false[, minRangeX = 0[, maxRangeX = 0[, minRangeY = 0[, maxRangeY = 0]]]]]])
    getSpectators(
      this: void,
      position: Position,
      multifloor?: boolean,
      onlyPlayers?: boolean,
      minRangeX?: number,
      maxRangeX?: number,
      minRangeY?: number,
      maxRangeY?: number
    ): Creature[];

    // Game.getPlayers()
    getPlayers(this: void): Player[];

    // Game.getNpcs()
    getNpcs(this: void): Npc[];

    // Game.getMonsters()
    getMonsters(this: void): Monster[];

    // Game.loadMap(path)
    loadMap(this: void, path: string): void;

    // Game.getExperienceStage(level)
    getExperienceStage(this: void, level: number): number;

    // Game.getExperienceForLevel(level)
    getExperienceForLevel(this: void, level: number): number;

    // Game.getMonsterCount()
    getMonsterCount(this: void): number;

    // Game.getPlayerCount()
    getPlayerCount(this: void): number;

    // Game.getNpcCount()
    getNpcCount(this: void): number;

    // Game.getMonsterTypes()
    getMonsterTypes(this: void): MonsterType[];

    // Game.getBestiary()
    getBestiary(this: void): Bestiary[];

    // Game.getCurrencyItems()
    getCurrencyItems(this: void): ItemType[];

    // Game.getItemTypeByClientId(clientId)
    getItemTypeByClientId(this: void, clientId: number): ItemType;

    // Game.getMountIdByLookType(lookType)
    getMountIdByLookType(this: void, lookType: number): number;

    // Game.getTowns()
    getTowns(this: void): Town[];

    // Game.getHouses()
    getHouses(this: void): House[];

    // Game.getOutfits(playerSex)
    getOutfits(this: void, playerSex: PlayerSex): Outfit[];

    // Game.getMounts()
    getMounts(this: void): Mount[];

    // Game.getVocations()
    getVocations(this: void): Vocation[];

    // Game.getGameState()
    getGameState(this: void): GameState;

    // Game.setGameState(state)
    setGameState(this: void, state: GameState): void;

    // Game.getWorldType()
    getWorldType(this: void): WorldType;

    // Game.setWorldType(type)
    setWorldType(this: void, type: WorldType): void;

    // Game.getReturnMessage(value)
    getReturnMessage(this: void, value: ReturnValue): string;

    // Game.getItemAttributeByName(name)
    getItemAttributeByName(this: void, name: ItemAttributeName): itemAttrTypes;

    // Game.createItem(itemId[, count[, position]])
    createItem(this: void, itemId: number, count?: number, position?: Position): Item | null;

    // Game.createContainer(itemId, size[, position])
    createContainer(
      this: void,
      itemId: number,
      size: number,
      position?: Position
    ): Container | null;

    // Game.createMonster(monsterName, position[, extended = false[, force = false[, magicEffect = CONST_ME_TELEPORT]]])
    createMonster(
      this: void,
      monsterName: string,
      position: Position,
      extended?: boolean,
      force?: boolean,
      magicEffect?: MagicEffectClasses
    ): Monster | null;

    // Game.createNpc(npcName, position[, extended = false[, force = false[, magicEffect = CONST_ME_TELEPORT]]])
    createNpc(
      this: void,
      npcName: string,
      position: Position,
      extended?: boolean,
      force?: boolean,
      magicEffect?: MagicEffectClasses
    ): Npc;

    // Game.createTile(x, y, z[, isDynamic = false])
    // Game.createTile(position[, isDynamic = false])
    createTile(this: void, x: number, y: number, z: number, isDynamic?: boolean): Tile;

    createTile(this: void, position: Position, isDynamic?: boolean): Tile;

    // Game.createMonsterType(name)
    createMonsterType(this: void, name: string): MonsterType;

    // Game.startEvent(event)
    startEvent(this: void, event: string): boolean;

    // Game.getClientVersion()
    getClientVersion(this: void): ClientVersion;

    // Game.reload(reloadType)
    reload(this: void, reloadType: ReloadTypes): boolean;
  }

  enum GameState {
    GAME_STATE_STARTUP,
    GAME_STATE_INIT,
    GAME_STATE_NORMAL,
    GAME_STATE_CLOSED,
    GAME_STATE_SHUTDOWN,
    GAME_STATE_CLOSING,
    GAME_STATE_MAINTAIN,
  }

  enum WorldType {
    WORLD_TYPE_NO_PVP = 1,
    WORLD_TYPE_PVP = 2,
    WORLD_TYPE_PVP_ENFORCED = 3,
  }

  interface Bestiary {
    name: string;
    monsterTypes: MonsterType[];
  }

  interface ClientVersion {
    min: number;
    max: number;
    string: string;
  }

  type ItemAttributeName =
      | 'aid'
      | 'uid'
      | 'description'
      | 'text'
      | 'date'
      | 'writer'
      | 'name'
      | 'article'
      | 'pluralname'
      | 'weight'
      | 'attack'
      | 'defense'
      | 'extradefense'
      | 'armor'
      | 'hitchance'
      | 'shootrange'
      | 'owner'
      | 'duration'
      | 'decaystate'
      | 'corpseowner'
      | 'charges'
      | 'fluidtype'
      | 'doorid'
      | 'decayto'
      | 'wrapid'
      | 'storeitem'
      | 'attackspeed'

}

export {};