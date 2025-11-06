// ---------------------------------------------
// 1. Parent Class
// ---------------------------------------------
class Vehicle {
  public move(speed: number): void {
    console.log(`[Overriding] Vehicle is moving at ${speed} km/h.`);
  }
}

// ---------------------------------------------
// 2. Child Class
// ---------------------------------------------
class Car extends Vehicle {
  // 💡 OVERRIDING: Same method name, same parameters, DIFFERENT class (Parent/Child)
  public move(speed: number): void {
    // We call the parent's logic and add our own specialized logic
    super.move(speed);
    console.log(`[Overriding] The Car's engine is humming.`);
  }
}

const myCar = new Car();
myCar.move(80);
// Output:
// [Overriding] Vehicle is moving at 80 km/h.
// [Overriding] The Car's engine is humming.
