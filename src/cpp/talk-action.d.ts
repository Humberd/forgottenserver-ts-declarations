declare global {
  const TalkAction: {
    // TalkAction(words)
    (this: void, ...words: string[]): TalkAction;
  };

  interface TalkAction {
    // talkAction:onSay(callback)
    onSay(callback: OnSay): boolean;

    // talkAction:register()
    register(): boolean;

    // talkAction:separator(sep)
    separator(sep: string): boolean;

    // talkAction:access(needAccess = false)
    access(needAccess: boolean): boolean;

    // talkAction:accountType(AccountType_t = ACCOUNT_TYPE_NORMAL)
    accountType(accountType: AccountType): boolean;
  }
}

export {};