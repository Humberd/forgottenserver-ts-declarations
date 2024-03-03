declare global {
  interface CountBlock {
    total: number;
    ticks: number;
  }

  type DamageMap = {
    [key: number]: CountBlock
  };
}

export {};