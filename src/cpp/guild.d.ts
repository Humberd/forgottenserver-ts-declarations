declare global {
  const Guild: {
    // Guild(id)
    (this: void, id: number): Guild | null;
  };

  interface Guild {
    // guild:getId()
    getId(): number;

    // guild:getName()
    getName(): string;

    // guild:getMembersOnline()
    getMembersOnline(): Player[];

    // guild:addRank(id, name, level)
    addRank(id: number, name: string, level: number): void;

    // guild:getRankById(id)
    getRankById(id: number): GuildRank;

    // guild:getRankByLevel(level)
    getRankByLevel(level: number): GuildRank;

    // guild:getMotd()
    getMotd(): string;

    // guild:setMotd(motd)
    setMotd(motd: string): void;
  }

  interface GuildRank {
    id: number,
    name: string,
    level: number,
  }
}

export {};