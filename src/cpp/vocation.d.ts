declare global {
  const Vocation: {
    // Vocation (id or name)
    (this: void, id: number): Vocation | null;
    (this: void, name: string): Vocation | null;
  };

  interface Vocation {
    // vocation:getId()
    getId(): number;

    // vocation:getClientId()
    getClientId(): number;

    // vocation:getName()
    getName(): string;

    // vocation:getDescription()
    getDescription(): string;

    // vocation:getRequiredSkillTries(skillType, skillLevel)
    getRequiredSkillTries(skillType: skills, skillLevel: number): number;

    // vocation:getRequiredManaSpent(magicLevel)
    getRequiredManaSpent(magicLevel: number): number;

    // vocation:getCapacityGain()
    getCapacityGain(): number;

    // vocation:getHealthGain()
    getHealthGain(): number;

    // vocation:getHealthGainTicks()
    getHealthGainTicks(): number;

    // vocation:getHealthGainAmount()
    getHealthGainAmount(): number;

    // vocation:getManaGain()
    getManaGain(): number;

    // vocation:getManaGainTicks()
    getManaGainTicks(): number;

    // vocation:getManaGainAmount()
    getManaGainAmount(): number;

    // vocation:getMaxSoul()
    getMaxSoul(): number;

    // vocation:getSoulGainTicks()
    getSoulGainTicks(): number;

    // vocation:getAttackSpeed()
    getAttackSpeed(): number;

    // vocation:getBaseSpeed()
    getBaseSpeed(): number;

    // vocation:getDemotion()
    getDemotion(): Vocation | null;

    // vocation:getPromotion()
    getPromotion(): Vocation | null;

    // vocation:allowsPvp()
    allowsPvp(): boolean;
  }
}

export {};