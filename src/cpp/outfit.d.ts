declare global {
  interface Outfit {
    lookType: number;
    name: string;
    premium: boolean;
    unlocked: boolean;
  }

  interface OutfitLook {
    lookType: number;
    lookTypeEx?: number;
    lookHead?: number;
    lookBody?: number;
    lookLegs?: number;
    lookFeet?: number;
    lookAddons?: number;
  }
}

export {};