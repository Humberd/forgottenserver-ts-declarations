declare global {
  const result: Result;

  interface Result {
    getNumber(this: void, id: number, key: string): number | false;
    getString(this: void, id: number, key: string): string | false;
    getStream(this: void, id: number, key: string): string | false;
    next(this: void, id: number): boolean;
    free(this: void, id: number): boolean;
  }
}

export {};