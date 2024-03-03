declare global {
  interface Mount {
    name: string;
    speed: number;
    clientId: number;
    id: number;
    premium: boolean;
  }
}

export {};