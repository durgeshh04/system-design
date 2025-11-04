interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return 3.14 * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateArea(shape: Shape): number {
  return shape.area();
}

const circle: Circle = new Circle(5);
console.log("Area of circle:", calculateArea(circle));

const reactangle: Rectangle = new Rectangle(2, 10);
console.log("Area of reactangle:", calculateArea(reactangle));

// Abstraction Implementation Example:

const now = new Date();

const currYear = now.getFullYear();
const currMonth = now.getMonth() + 1;
const currDate = now.getDate();

console.log(currYear);
console.log(currMonth);
console.log(currDate);
