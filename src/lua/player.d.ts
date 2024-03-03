declare global {
  interface Player {
    feed(food: number): boolean;

    /** @customName getClosestFreePosition */
    getClosestFreePosition2(position: Position, extended: boolean): Position;

    getDepotItems(depotId: number): number;

    hasFlag(flag: PlayerFlags): boolean;

    getLossPercent(): number;

    getPremiumTime(): number;

    setPremiumTime(seconds: number): boolean;

    addPremiumTime(seconds: number): boolean;

    removePremiumTime(seconds: number): boolean;

    getPremiumDays(): number;

    addPremiumDays(days: number): boolean;

    removePremiumDays(days: number): boolean;

    isPremium(): boolean;

    sendCancelMessage(message: string): boolean;

    isUsingOtClient(): boolean;

    sendExtendedOpcode(opcode: number, buffer: string): boolean;

    transferMoneyTo(target: Player, amount: number): boolean;

    canCarryMoney(amount: number): boolean;

    withdrawMoney(amount: number): boolean;

    depositMoney(amount: number): boolean;

    removeTotalMoney(amount: number): boolean;

    addLevel(amount: number, round?: boolean): boolean;

    addMagicLevel(value: number): boolean;

    addSkillLevel(skillId: skills, value: number): boolean;

    addSkill(skillId: skills, value: number, round?: boolean): boolean;

    getWeaponType(): WeaponType;

    getTotalMoney(): number;
  }
}

export {};
