declare global {
  const Npc: {
    // Npc([id or name or userdata])
    (this: void, id: number): Npc | null;
    (this: void, name: string): Npc | null;
    (this: void, userdata: Npc): Npc | null;
  };

  interface Npc extends Creature {
    // npc:isNpc()
    isNpc(): this is Npc;

    // npc:setMasterPos(pos[, radius])
    setMasterPos(pos: Position, radius?: number): boolean;

    // npc:getSpeechBubble()
    getSpeechBubble(): SpeechBubble;

    // npc:setSpeechBubble(speechBubble)
    setSpeechBubble(speechBubble: SpeechBubble): boolean;

    // npc:getSpectators()
    getSpectators(): Player[];
  }
}

export {};