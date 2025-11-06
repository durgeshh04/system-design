// This is example of the Sub-Type Polymorphism:
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

function calculateTotalArea(shapes: Shape[]): number {
  return shapes.reduce(
    (totalArea, shapeArea) => totalArea + shapeArea.area(),
    0
  );
}

const rectangle: Shape = new Rectangle(5, 2);
console.log(rectangle.area());

const circle: Shape = new Circle(10);
console.log(circle.area());

console.log(calculateTotalArea([rectangle, circle]));

// This is a example of the Parametric Polymorphism:
// Ex: 1
console.log("\n");
function identity<T>(value: T): T {
  return value;
}

const numIdentity: number = identity<number>(42);
const strIdentity: string = identity<string>("Eagle");

console.log(`Number identity: ${numIdentity}`);
console.log(`String identity: ${strIdentity}`);

// Ex: 2
console.log("\n");
// Define a generic class 'Pair' that can store two values of the same type
class Pair<T> {
  constructor(public first: T, public second: T) {}

  public swap(): object {
    let temp = this.first;
    this.first = this.second;
    this.second = temp;
    return { first: this.first, second: this.second };
  }
}

const numSwap: Pair<number> = new Pair(5, 10);
const strSwap: Pair<string> = new Pair("Eagle", "Swan");

console.log("Before calling swap for the numSwap:", numSwap);
console.log("After calling swap for the numSwap:", numSwap.swap());
console.log("Before calling swap for the strSwap:", strSwap);
console.log("After calling swap for the strSwap:", strSwap.swap());
