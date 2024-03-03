declare global {
  const NetworkMessage: {
    // NetworkMessage()
    (this: void): NetworkMessage;
  }

  interface NetworkMessage {
    // networkMessage:getByte()
    getByte(): number;

    // networkMessage:getU16()
    getU16(): number;

    // networkMessage:getU32()
    getU32(): number;

    // networkMessage:getU64()
    getU64(): number;

    // networkMessage:getString()
    getString(): string;

    // networkMessage:getPosition()
    getPosition(): Position;

    // networkMessage:addByte(number)
    addByte(number: number): boolean;

    // networkMessage:addU16(number)
    addU16(number: number): boolean;

    // networkMessage:addU32(number)
    addU32(number: number): boolean;

    // networkMessage:addU64(number)
    addU64(number: number): boolean;

    // networkMessage:addString(string)
    addString(string: string): boolean;

    // networkMessage:addPosition(position)
    addPosition(position: Position): boolean;

    // networkMessage:addDouble(number)
    addDouble(number: number): boolean;

    // networkMessage:addItem(item)
    addItem(item: Item): boolean;

    // networkMessage:addItemId(itemId)
    addItemId(itemId: number): boolean;

    // networkMessage:reset()
    reset(): boolean;

    // networkMessage:seek(position)
    seek(position: number): boolean;

    // networkMessage:tell()
    tell(): number;

    // networkMessage:len()
    len(): number;

    // networkMessage:skipBytes(number)
    skipBytes(number: number): boolean;

    // networkMessage:sendToPlayer(player)
    sendToPlayer(player: Player): boolean;
  }
}

export {};