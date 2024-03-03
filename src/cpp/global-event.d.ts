declare global {
  const GlobalEvent: {
    // GlobalEvent(eventName)
    (this: void, eventName: string): GlobalEvent;
  }

  interface GlobalEvent {
    // globalevent:type(callback)
    type(callback: GlobalEventType): boolean;

    // globalevent:register()
    register(): boolean;

    // globalevent:time(time)
    time(time: string): boolean;

    // globalevent:interval(interval)
    interval(interval: number): boolean;

    // globalevent:onThink / record / etc. (callback)
    onThink(callback: OnThinkGlobal): boolean;

    onTime(callback: OnTime): boolean;

    onStartup(callback: OnStartup): boolean;

    onShutdown(callback: OnShutdown): boolean;

    onRecord(callback: OnRecord): boolean;

    onSave(callback: OnSave): boolean;
  }

  type GlobalEventType =
      | 'startup'
      | 'shutdown'
      | 'record'
      | 'timer'
      | 'save';
}

export {};