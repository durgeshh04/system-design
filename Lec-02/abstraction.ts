interface Car {
  startEngine(): void;
  shiftGear(): void;
  accelerate(): void;
  brake(): void;
  stopEngine(): void;
}

class SportsCar implements Car {
  private brand: string;
  private model: string;
  private isEngineOn: boolean = false;
  private currentSpeed: number = 0;
  private currentGear: number = 0;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  public startEngine(): void {
    this.isEngineOn = true;
    console.log(`${this.brand} ${this.model}: Engine start with a roar...`);
  }
  public shiftGear(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot shift a gear.`
      );
      return;
    }
    if (this.currentGear == 6) {
      console.log("You cannot shift gear now");
    }
    this.currentGear += 1;
    console.log(
      `${this.brand} ${this.model} : Shifted to gear ${this.currentGear}`
    );
  }
  public accelerate(): void {
    if (!this.isEngineOn) {
      console.log(
        `${this.brand} ${this.model} : Engine is off! Cannot accelerate.`
      );
      return;
    }
    this.currentSpeed += 20;
    console.log(
      `${this.brand} ${this.model} : accelerating to gear ${this.currentSpeed} km/h.`
    );
  }
  public brake(): void {
    this.currentSpeed -= 20;
    if (this.currentSpeed < 0) this.currentSpeed = 0;
    this.currentGear -= 1;
    console.log(
      `${this.brand} ${this.model} : Braking! Speed is now ${this.currentSpeed} km/h, and Gear lowered to ${this.currentGear}`
    );
  }
  public stopEngine(): void {
    this.isEngineOn = false;
    this.currentGear = 0;
    this.currentSpeed = 0;
    console.log(`${this.brand} ${this.model} : Engine turned off.`);
  }
}

const myCar: Car = new SportsCar("Ford", "Mustang");
console.log("--- Operating the Car (via the Car interface) ---");
myCar.startEngine();
myCar.shiftGear();
myCar.accelerate();
myCar.shiftGear();
myCar.accelerate();
myCar.brake();
myCar.shiftGear();
myCar.accelerate();
myCar.shiftGear();
myCar.brake();
myCar.stopEngine();
