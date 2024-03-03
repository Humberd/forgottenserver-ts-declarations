declare global {
  const Teleport: {
    // Teleport(uid)
    (this: void, uid: number): Teleport | null;
  }

  interface Teleport extends Item {
    // teleport:getDestination()
    getDestination(): Position;

    // teleport:setDestination(position)
    setDestination(position: Position): boolean;
  }
}

export {};