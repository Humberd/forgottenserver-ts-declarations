declare global {
  const ModalWindow: {
    // ModalWindow(id, title, message)
    (this: void, id: number, title: string, message: string): ModalWindow;
  };

  interface ModalWindow {
    // modalWindow:getId()
    getId(): number;

    // modalWindow:getTitle()
    getTitle(): string;

    // modalWindow:getMessage()
    getMessage(): string;

    // modalWindow:setTitle(text)
    setTitle(text: string): boolean;

    // modalWindow:setMessage(text)
    setMessage(text: string): boolean;

    // modalWindow:getButtonCount()
    getButtonCount(): number;

    // modalWindow:getChoiceCount()
    getChoiceCount(): number;

    // modalWindow:addButton(id, text)
    addButton(id: number, text: string): boolean;

    // modalWindow:addChoice(id, text)
    addChoice(id: number, text: string): boolean;

    // modalWindow:getDefaultEnterButton()
    getDefaultEnterButton(): number;

    // modalWindow:setDefaultEnterButton(buttonId)
    setDefaultEnterButton(buttonId: number): boolean;

    // modalWindow:getDefaultEscapeButton()
    getDefaultEscapeButton(): number;

    // modalWindow:setDefaultEscapeButton(buttonId)
    setDefaultEscapeButton(buttonId: number): boolean;

    // modalWindow:hasPriority()
    hasPriority(): boolean;

    // modalWindow:setPriority(priority)
    setPriority(priority: boolean): boolean;

    // modalWindow:sendToPlayer(player)
    sendToPlayer(player: Player): boolean;
  }
}

export {};