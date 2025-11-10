class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getShow(): void {
    console.warn("Hello, Mr. Eagle...");
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.getShow();
instance2.getShow();

console.log(instance1 == instance2);
