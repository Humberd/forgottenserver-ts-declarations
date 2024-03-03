declare global {
  interface XMLNode {
    // node:delete() or node:__gc()
    delete(): boolean;

    // node:attribute(name)
    attribute(name: string): string | null;

    // node:name()
    name(): string;

    // node:firstChild()
    firstChild(): XMLNode | null;

    // node:nextSibling()
    nextSibling(): XMLNode | null;
  }
}

export {};