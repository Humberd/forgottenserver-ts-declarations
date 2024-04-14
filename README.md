# The Forgotten Server - TypeScript Declarations

![GitHub license](https://img.shields.io/github/license/Humberd/forgottenserver-ts-declarations)

Typescript declaration files
for [The Forgotten Server 1.4.2](https://github.com/otland/forgottenserver/releases/tag/v1.4.2).

Works together with https://github.com/Humberd/forgottenserver-ts-scripting

## Installation

```bash
npm install --save-dev forgottenserver-ts-declarations
```

In your project modify `tsconfig.json` to include the following:

```json
{
  "include": [
    "<your other packages>",
    "node_modules/forgottenserver-ts-declarations"
  ]
}
```


## Example

A talkaction `/kill_player` that instantly kills a player when you are a God.

```typescript
const talkAction = TalkAction('/kill_player', '/kp');

talkAction.onSay((player, words, param) => {
  const potentialPlayer = Player(param.trim());
  if (!potentialPlayer) {
    player.sendTextMessage(MessageClasses.MESSAGE_STATUS_WARNING, `Player ${param} not found.`);
    return false;
  }
  potentialPlayer.addHealth(-potentialPlayer.getHealth());
  potentialPlayer.getPosition().sendMagicEffect(MagicEffectClasses.CONST_ME_MORTAREA);
  potentialPlayer.sendTextMessage(
      MessageClasses.MESSAGE_STATUS_CONSOLE_BLUE,
      `You were instantly killed by god`
  );

  player.sendTextMessage(
      MessageClasses.MESSAGE_STATUS_CONSOLE_BLUE,
      `Killed ${potentialPlayer.getName()}`
  );

  return false;
});

talkAction.separator(' ');
talkAction.access(true);
talkAction.accountType(AccountType.ACCOUNT_TYPE_GOD);
talkAction.register();

export {};
```

## Good to know

- Typescript code is transpiled to Lua, so there is no browser or Node.js specific APIs. Treat it as a templating
  language for Lua.
- All the structures are defined in a global scope. No importing is required.
- By default all root level variables are not scoped, for example:
  ```typescript
    // file A.ts
    const a = 1;
  
    // file B.ts
    const a = 2; // Error: Variable 'a' is already defined in the global scope.
  ```
  To avoid this, use `export {}` at the end of the file to create a module scope.
  ```typescript
    // file A.ts
    const a = 1;
    export {};
  
    // file B.ts
    const a = 2; // No error
    export {};
  ```
- All the enums are treated in a special way. See example:
  ```typescript
  // A.ts
  print(MessageClasses.MESSAGE_STATUS_WARNING);
  ```
  is transpiled to:
  ```lua
  # A.lua
  print(MESSAGE_STATUS_WARNING);
  ```

## Overview

This project includes TypeScript declaration files in two directories for type definitions:

- `cpp`: Contains declarations for structures defined
  in [src/luascript.cpp](https://github.com/otland/forgottenserver/blob/1.4/src/luascript.cpp).
- `lua`: Contains declarations for structures defined in
  the [data](https://github.com/otland/forgottenserver/tree/1.4/data) directory with Lua scripts.

## Contributing

Pull requests are welcomed.
