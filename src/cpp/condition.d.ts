declare global {
  const Condition: {
    // Condition(conditionType[, conditionId = CONDITIONID_COMBAT])
    (this: void, conditionType: ConditionType, conditionId?: ConditionId): Condition | null;
  };

  interface Condition {
    // condition:delete()
    delete(): void;

    // condition:getId()
    getId(): ConditionId;

    // condition:getSubId()
    getSubId(): number;

    // condition:getType()
    getType(): ConditionType;

    // condition:getIcons()
    getIcons(): number;

    // condition:getEndTime()
    getEndTime(): number;

    // condition:clone()
    clone(): Condition;

    // condition:getTicks()
    getTicks(): number;

    // condition:setTicks(ticks)
    setTicks(ticks: number): void;

    // condition:setParameter(key, value)
    setParameter(key: ConditionParam, value: number | boolean): void;

    // condition:getParameter(key)
    getParameter(key: ConditionParam): number;

    // condition:setFormula(mina, minb, maxa, maxb)
    setFormula(mina: number, minb: number, maxa: number, maxb: number): void;

    // condition:setOutfit(outfit)
    // condition:setOutfit(lookTypeEx, lookType, lookHead, lookBody, lookLegs, lookFeet[, lookAddons[, lookMount]])
    setOutfit(outfit: OutfitLook): void;
    setOutfit(
        lookTypeEx: number,
        lookType: number,
        lookHead: number,
        lookBody: number,
        lookLegs: number,
        lookFeet: number,
        lookAddons?: number,
        lookMount?: number,
    ): void;

    // condition:addDamage(rounds, time, value)
    addDamage(rounds: number, time: number, value: number): boolean;
  }
}

export {};