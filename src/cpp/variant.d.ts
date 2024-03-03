declare global {
  const Variant: {
    // Condition(conditionType[, conditionId = CONDITIONID_COMBAT])
    (this: void, value: number | string | Position | Thing, something?: any): Condition | null;
  };

  interface Variant {
    // Variant:getNumber()
    getNumber(): number;

    // Variant:getString()
    getString(): string;

    // Variant:getPosition()
    getPosition(): Position;
  }
}

export {};