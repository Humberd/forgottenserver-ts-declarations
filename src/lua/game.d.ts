declare global {
  interface Game {
    broadcastMessage(this: void, message: string, messageType?: MessageClasses): void;

    convertIpToString(this: void, ip: number): string;

    getReverseDirection(this: void, direction: Direction): Direction;

    getSkillType(this: void, weaponType: WeaponType): skills;

    getStorageValue(this: void, key: string): any;

    setStorageValue(this: void, key: string, value: any): void;
  }
}

export {};
