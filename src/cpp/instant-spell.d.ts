declare global {
  interface InstantSpell {
    name: string;
    words: string;
    level: number;
    mlevel: number;
    mana: number;
    manapercent: number;
    params: boolean;
  }
}

export {};