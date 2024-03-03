declare global {
  const XMLDocument: {
    // XMLDocument(filename)
    (this: void, filename: string): XMLDocument;
  };

  interface XMLDocument {
    // doc:delete() or doc:__gc()
    delete(): boolean;

    // doc:child(name)
    child(name: string): XMLNode | null;
  }
}

export {};