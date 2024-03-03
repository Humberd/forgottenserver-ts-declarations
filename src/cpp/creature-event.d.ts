declare global {
  const CreatureEvent: {
    // CreatureEvent(eventName)
    (this: void, eventName: string): CreatureEvent;
  };

  interface CreatureEvent {
    // creatureevent:type(callback)
    type(callback: CreatureEventStringType): boolean;

    // creatureevent:register()
    register(): boolean;

    // creatureevent:onLogin / logout / etc. (callback)
    onLogin(callback: OnLogin): boolean;

    // note: is called for every player's death
    // It doesn't matter if you registerEvent with a name from CreatureEvents or not
    onLogout(callback: OnLogout): boolean;

    onThink(callback: OnThink): boolean;

    onPrepareDeath(callback: OnPrepareDeath): boolean;

    onDeath(callback: OnDeath): boolean;

    onKill(callback: OnKill): boolean;

    onAdvance(callback: OnAdvance): boolean;

    onModalWindow(callback: OnModalWindow): boolean;

    onTextEdit(callback: OnTextEdit): boolean;

    onHealthChange(callback: OnHealthChange): boolean;

    onManaChange(callback: OnManaChange): boolean;

    onExtendedOpcode(callback: OnExtendedOpcode): boolean;
  }

  type CreatureEventStringType =
      | 'login'
      | 'logout'
      | 'think'
      | 'preparedeath'
      | 'death'
      | 'kill'
      | 'advance'
      | 'modalwindow'
      | 'textedit'
      | 'healthchange'
      | 'manachange'
      | 'extendedopcode';

  /** @compileMembersOnly */
  enum CreatureEventType {
    CREATURE_EVENT_NONE,
    CREATURE_EVENT_LOGIN,
    CREATURE_EVENT_LOGOUT,
    CREATURE_EVENT_THINK,
    CREATURE_EVENT_PREPAREDEATH,
    CREATURE_EVENT_DEATH,
    CREATURE_EVENT_KILL,
    CREATURE_EVENT_ADVANCE,
    CREATURE_EVENT_MODALWINDOW,
    CREATURE_EVENT_TEXTEDIT,
    CREATURE_EVENT_HEALTHCHANGE,
    CREATURE_EVENT_MANACHANGE,
    CREATURE_EVENT_EXTENDED_OPCODE, // otc
  }
}

export {};