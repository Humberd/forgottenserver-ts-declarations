declare global {
  const db: Db;

  interface Db {
    query(this: void, query: string): boolean;
    asyncQuery(this: void, query: string): boolean;
    storeQuery(this: void, query: string): number | false;
    asyncStoreQuery(this: void, query: string): number | false;
    escapeString(this: void, string: string): string;
    escapeBlob(this: void, string: string): string;
    lastInsertId(this: void): number;
    tableExists(this: void, table: string): boolean;
  }
}

export {};