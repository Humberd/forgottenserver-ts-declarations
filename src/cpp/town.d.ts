declare global {
  const Town: {
    // Town(id)
    (this: void, id: number): Town | null;
  };

  interface Town {
    // town:getId()
    getId(): number;

    // town:getName()
    getName(): string;

    // town:getTemplePosition()
    getTemplePosition(): Position;
  }
}

export {};