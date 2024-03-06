declare global {
  interface Container {
    createLootItem(item: Item): boolean;

  }
}

export {};