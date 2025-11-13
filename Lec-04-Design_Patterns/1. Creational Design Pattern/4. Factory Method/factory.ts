abstract class Car {
  constructor(public model: string, public productionYear: number) {}
  abstract displayCar(): void;
}

class SUV extends Car {
  displayCar(): void {
    console.log(
      `This is a SUV Car- MODEL: ${this.model} PRODUCTION YEAR: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  displayCar(): void {
    console.log(
      `This is a Hatchback Car- MODEL: ${this.model} PRODUCTION YEAR: ${this.productionYear}`
    );
  }
}

class Sedan extends Car {
  displayCar(): void {
    console.log(
      `This is a Sedan Car- MODEL: ${this.model} PRODUCTION YEAR: ${this.productionYear}`
    );
  }
}

class CarFactory {
  public createCar(
    type: "suv" | "sedan" | "hatchback",
    model: string,
    productionYear: number
  ) {
    switch (type) {
      case "suv":
        return new SUV(model, productionYear);

      case "sedan":
        return new Sedan(model, productionYear);

      case "hatchback":
        return new Hatchback(model, productionYear);

      default:
        throw new Error("This case is not valid");
    }
  }
}

const carFactory: CarFactory = new CarFactory();
const suv = carFactory.createCar("suv", "Swift", 2019);
suv.displayCar();

const sedan = carFactory.createCar("sedan", "xyz", 2001);
sedan.displayCar();

const hatchback = carFactory.createCar("hatchback", "abc", 2010);
hatchback.displayCar();
