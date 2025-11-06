abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public length: number, public breadth: number) {
    super();
  }

  calculateArea(): number {
    return this.length * this.breadth;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

// client code...

function area(shape: Shape) {
  return shape.calculateArea();
}

const rect: Rectangle = new Rectangle(10, 12);
const squr: Square = new Square(8);

console.log(area(rect));
console.log(area(squr));
