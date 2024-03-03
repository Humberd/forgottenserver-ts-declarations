declare global {
  const Combat: {
    // Combat()
    (this: void): Combat;
  };

  interface Combat {

    // combat:setParameter(key, value)
    setParameter(key: CombatParam, value: number | boolean): boolean;

    // combat:getParameter(key)
    getParameter(key: CombatParam): number | null;

    // combat:setFormula(type, mina, minb, maxa, maxb)
    setFormula(type: number, mina: number, minb: number, maxa: number, maxb: number): boolean;

    // combat:setArea(area)
    setArea(area: number): boolean;

    // combat:addCondition(condition)
    addCondition(condition: Condition): boolean;

    // combat:clearConditions()
    clearConditions(): boolean;

    // combat:setCallback(key, function)
    setCallback(key: CallBackParam, func: string): boolean;

    // combat:setOrigin(origin)
    setOrigin(origin: CombatOrigin): boolean;

    // combat:execute(creature, variant)
    execute(creature: Creature, variant: LuaVariantType): boolean;
  }

  /** @compileMembersOnly */
  enum CombatOrigin {
    ORIGIN_NONE,
    ORIGIN_CONDITION,
    ORIGIN_SPELL,
    ORIGIN_MELEE,
    ORIGIN_RANGED,
  }
}

export {};