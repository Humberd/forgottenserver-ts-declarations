declare global {
  const Player: {
    // Player(id or guid or name or userdata)
    (this: void, id: number): Player | null;
    (this: void, guid: number): Player | null;
    (this: void, name: string): Player | null;
    (this: void, userdata: any): Player | null;
  };

  interface Player extends Creature {
    // player:isPlayer()
    isPlayer(): this is Player;

    // player:getGuid();
    getGuid(): number;

    // player:getIp()
    getIp(): string;

    // player:getAccountId()
    getAccountId(): number;

    // player:getLastLoginSaved()
    getLastLoginSaved(): number;

    // player:getLastLogout()
    getLastLogout(): number;

    // player:getAccountType()
    getAccountType(): number;

    // player:setAccountType(accountType)
    setAccountType(accountType: number): boolean;

    // player:getCapacity()
    getCapacity(): number;

    // player:setCapacity(capacity)
    setCapacity(capacity: number): boolean;

    // player:getFreeCapacity()
    getFreeCapacity(): number;

    // player:getDepotChest(depotId[, autoCreate = false])
    getDepotChest(depotId: number, autoCreate?: boolean): Item | null;

    // player:getInbox()
    getInbox(): Item | null;

    // player:getSkullTime()
    getSkullTime(): number;

    // player:setSkullTime(skullTime)
    setSkullTime(skullTime: number): boolean;

    // player:getDeathPenalty()
    getDeathPenalty(): number;

    // player:getExperience()
    getExperience(): number;

    // player:addExperience(experience[, sendText = false])
    addExperience(experience: number, sendText?: boolean): boolean;

    // player:removeExperience(experience[, sendText = false])
    removeExperience(experience: number, sendText?: boolean): boolean;

    // player:getLevel()
    getLevel(): number;

    // player:getMagicLevel()
    getMagicLevel(): number;

    // player:getBaseMagicLevel()
    getBaseMagicLevel(): number;

    // player:getMana()
    getMana(): number;

    // player:addMana(manaChange[, animationOnLoss = false])
    addMana(manaChange: number, animationOnLoss?: boolean): boolean;

    // player:getMaxMana()
    getMaxMana(): number;

    // player:setMaxMana(maxMana)
    setMaxMana(maxMana: number): boolean;

    // player:getManaSpent()
    getManaSpent(): number;

    // player:addManaSpent(amount)
    addManaSpent(amount: number): boolean;

    // player:removeManaSpent(amount[, notify = true])
    removeManaSpent(amount: number, notify?: boolean): boolean;

    // player:getBaseMaxHealth()
    getBaseMaxHealth(): number;

    // player:getBaseMaxMana()
    getBaseMaxMana(): number;

    // player:getSkillLevel(skillType)
    getSkillLevel(skillType: skills): number;

    // player:getEffectiveSkillLevel(skillType)
    getEffectiveSkillLevel(skillType: skills): number;

    // player:getSkillPercent(skillType)
    getSkillPercent(skillType: skills): number;

    // player:getSkillTries(skillType)
    getSkillTries(skillType: skills): number;

    // player:addSkillTries(skillType, tries)
    addSkillTries(skillType: skills, tries: number): boolean;

    // player:removeSkillTries(skillType, tries[, notify = true])
    removeSkillTries(skillType: skills, tries: number, notify?: boolean): boolean;

    // player:getSpecialSkill(specialSkillType)
    getSpecialSkill(specialSkillType: SpecialSkills): number;

    // player:addSpecialSkill(specialSkillType, value)
    addSpecialSkill(specialSkillType: SpecialSkills, value: number): boolean;

    // player:addOfflineTrainingTime(time)
    addOfflineTrainingTime(time: number): boolean;

    // player:getOfflineTrainingTime()
    getOfflineTrainingTime(): number;

    // player:removeOfflineTrainingTime(time)
    removeOfflineTrainingTime(time: number): boolean;

    // player:addOfflineTrainingTries(skillType, tries)
    addOfflineTrainingTries(skillType: skills, tries: number): boolean;

    // player:getOfflineTrainingSkill()
    getOfflineTrainingSkill(): number;

    // player:setOfflineTrainingSkill(skillId)
    setOfflineTrainingSkill(skillId: number): boolean;

    // player:getItemCount(itemId[, subType = -1])
    getItemCount(itemId: number, subType?: number): number;

    // player:getItemById(itemId, deepSearch[, subType = -1])
    getItemById(itemId: number, deepSearch: boolean, subType?: number): Item | null;

    // player:getVocation()
    getVocation(): Vocation | null;

    // player:setVocation(id or name or userdata)
    setVocation(id: number | string | Vocation): boolean;

    // player:getSex()
    getSex(): PlayerSex;

    // player:setSex(newSex)
    setSex(newSex: PlayerSex): boolean;

    // player:getTown()
    getTown(): Town;

    // player:setTown(town)
    setTown(town: Town): boolean;

    // player:getGuild()
    getGuild(): Guild;

    // player:setGuild(guild)
    setGuild(guild: Guild): boolean;

    // player:getGuildLevel()
    getGuildLevel(): number;

    // player:setGuildLevel(level)
    setGuildLevel(level: number): boolean;

    // player:getGuildNick()
    getGuildNick(): string;

    // player:setGuildNick(nick)
    setGuildNick(nick: string): boolean;

    // player:getGroup()
    getGroup(): Group;

    // player:setGroup(group)
    setGroup(group: Group): boolean;

    // player:getStamina()
    getStamina(): number;

    // player:setStamina(stamina)
    setStamina(stamina: number): boolean;

    // player:getSoul()
    getSoul(): number;

    // player:addSoul(soulChange)
    addSoul(soulChange: number): boolean;

    // player:getMaxSoul()
    getMaxSoul(): number;

    // player:getBankBalance()
    getBankBalance(): number;

    // player:setBankBalance(bankBalance)
    setBankBalance(bankBalance: number): boolean;

    // player:getStorageValue(key)
    getStorageValue(key: number): number;

    // player:setStorageValue(key, value)
    setStorageValue(key: number, value: number): boolean;

    // player:addItem(itemId[, count = 1[, canDropOnMap = true[, subType = 1[, slot = CONST_SLOT_WHEREEVER]]]])
    addItem(
      itemId: number,
      count?: number,
      canDropOnMap?: boolean,
      subType?: Slots,
      slot?: number
    ): Item | null;

    // player:addItemEx(item[, canDropOnMap = false[, index = INDEX_WHEREEVER[, flags = 0]]])
    // player:addItemEx(item[, canDropOnMap = true[, slot = CONST_SLOT_WHEREEVER]])
    addItemEx(item: Item, canDropOnMap?: boolean, index?: number, flags?: number): number;

    addItemEx(item: Item, canDropOnMap?: boolean, slot?: number): number;

    // player:removeItem(itemId, count[, subType = -1[, ignoreEquipped = false]])
    removeItem(itemId: number, count: number, subType?: number, ignoreEquipped?: boolean): boolean;

    // player:sendSupplyUsed(item)
    sendSupplyUsed(item: Item): boolean;

    // player:getMoney()
    getMoney(): number;

    // player:addMoney(money)
    addMoney(money: number): boolean;

    // player:removeMoney(money)
    removeMoney(money: number): boolean;

    // player:showTextDialog(id or name or userdata[, text[, canWrite[, length]]])
    showTextDialog(
      id: number | string | Item,
      text?: string,
      canWrite?: boolean,
      length?: number
    ): number;

    // player:sendTextMessage(type, text[, position, primaryValue = 0, primaryColor = TEXTCOLOR_NONE[,
    // secondaryValue = 0, secondaryColor = TEXTCOLOR_NONE]]) player:sendTextMessage(type, text, channelId)
    sendTextMessage(
      type: MessageClasses,
      text: string,
      position?: Position,
      primaryValue?: number,
      primaryColor?: TextColor,
      secondaryValue?: number,
      secondaryColor?: TextColor
    ): boolean;

    sendTextMessage(type: MessageClasses, text: string, channelId: number): boolean;

    // player:sendChannelMessage(author, text, type, channelId)
    sendChannelMessage(
      author: string,
      text: string,
      type: SpeakClasses,
      channelId: number
    ): boolean;

    // player:sendPrivateMessage(speaker, text[, type])
    sendPrivateMessage(speaker: Player, text: string, type?: SpeakClasses): boolean;

    // player:channelSay(speaker, type, text, channelId)
    channelSay(speaker: Player, type: SpeakClasses, text: string, channelId: number): boolean;

    // player:openChannel(channelId)
    openChannel(channelId: number): boolean;

    // player:getSlotItem(slot)
    getSlotItem(slot: Slots): Item | null;

    // player:getParty()
    getParty(): Party;

    // player:addOutfit(lookType)
    addOutfit(lookType: number): boolean;

    // player:addOutfitAddon(lookType, addon)
    addOutfitAddon(lookType: number, addon: number): boolean;

    // player:removeOutfit(lookType)
    removeOutfit(lookType: number): boolean;

    // player:removeOutfitAddon(lookType, addon)
    removeOutfitAddon(lookType: number, addon: number): boolean;

    // player:hasOutfit(lookType[, addon = 0])
    hasOutfit(lookType: number, addon?: number): boolean;

    // player:canWearOutfit(lookType[, addon = 0])
    canWearOutfit(lookType: number, addon?: number): boolean;

    // player:sendOutfitWindow()
    sendOutfitWindow(): boolean;

    // player:addMount(mountId or mountName)
    addMount(mountId: number | string): boolean;

    // player:removeMount(mountId or mountName)
    removeMount(mountId: number | string): boolean;

    // player:hasMount(mountId or mountName)
    hasMount(mountId: number | string): boolean;

    // player:getPremiumEndsAt()
    getPremiumEndsAt(): number;

    // player:setPremiumEndsAt(timestamp)
    setPremiumEndsAt(timestamp: number): boolean;

    // player:hasBlessing(blessing)
    hasBlessing(blessing: number): boolean;

    // player:addBlessing(blessing)
    addBlessing(blessing: number): boolean;

    // player:removeBlessing(blessing)
    removeBlessing(blessing: number): boolean;

    // player:canLearnSpell(spellName)
    canLearnSpell(spellName: string): boolean;

    // player:learnSpell(spellName)
    learnSpell(spellName: string): boolean;

    // player:forgetSpell(spellName)
    forgetSpell(spellName: string): boolean;

    // player:hasLearnedSpell(spellName)
    hasLearnedSpell(spellName: string): boolean;

    // player:sendTutorial(tutorialId)
    sendTutorial(tutorialId: number): boolean;

    // player:addMapMark(position, type, description)
    addMapMark(position: Position, type: MapMark, description: string): boolean;

    // player:save()
    save(): boolean;

    // player:popupFYI(message)
    popupFYI(message: string): boolean;

    // player:isPzLocked()
    isPzLocked(): boolean;

    // player:getClient()
    getClient(): any;

    // player:getHouse()
    getHouse(): any;

    // player:sendHouseWindow(house, listId)
    sendHouseWindow(house: House, listId: number): boolean;

    // player:setEditHouse(house, listId)
    setEditHouse(house: House, listId: number): boolean;

    // player:setGhostMode(enabled[, magicEffect = CONST_ME_TELEPORT])
    setGhostMode(enabled: boolean, magicEffect?: MagicEffectClasses): boolean;

    // player:getContainerId(container)
    getContainerId(container: Container): number | null;

    // player:getContainerById(id)
    getContainerById(id: number): Container | null;

    // player:getContainerIndex(id)
    getContainerIndex(id: number): number;

    // player:getInstantSpells()
    getInstantSpells(): InstantSpell[];

    // player:canCast(spell)
    canCast(spell: InstantSpell): boolean;

    // player:hasChaseMode()
    hasChaseMode(): boolean;

    // player:hasSecureMode()
    hasSecureMode(): boolean;

    // player:getFightMode()
    getFightMode(): FightMode;

    // player:getStoreInbox()
    getStoreInbox(): Container | null;
  }

  /** @compileMembersOnly */
  enum FightMode {
    FIGHTMODE_ATTACK = 1,
    FIGHTMODE_BALANCED = 2,
    FIGHTMODE_DEFENSE = 3,
  }
}

export {};