interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  public render(): void {
    console.log("Render a button in Windows style.");
  }

  public onClick(f: Function): void {
    console.log("Bind a windows style button click event.");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in windows style.");
  }

  public toggle(): void {
    this.button.onClick(() => "Checkbox state is toggled.");
  }
}

class MacOsButton implements Button {
  public render(): void {
    console.log("Render a button in MacOs style.");
  }

  public onClick(f: Function): void {
    console.log("Bind a MacOs style button click event.");
    f();
  }
}

class MacOsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  public render(): void {
    console.log("Render a checkbox in MacOs style.");
  }

  public toggle(): void {
    this.button.onClick(() => "Checkbox state is toggled.");
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new MacOsCheckbox(button);
  }
}

function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("Button Clicked!"));
  checkbox.toggle();
}

console.log("App: Launched with the Windows factory.");
renderUI(new WindowsFactory());

console.log("App: Launched with the MacOS factory.");
renderUI(new MacOSFactory());
