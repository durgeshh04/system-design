interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  public properties: ShapeProperties;
  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  public height: number;
  public width: number;
  constructor(properties: ShapeProperties, height: number, width: number) {
    super(properties);
    this.height = height;
    this.width = width;
  }

  clone(): Shape {
    let clonnedProperties: ShapeProperties = { ...this.properties };
    return new Rectangle(clonnedProperties, this.height, this.width);
  }
}

class Circle extends Shape {
  public radius: number;
  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
    this.radius = radius;
  }

  clone(): Shape {
    let clonnedProperties: ShapeProperties = { ...this.properties };
    return new Circle(clonnedProperties, this.radius);
  }
}

const redRectangle: Shape = new Rectangle(
  { color: "red", x: 10, y: 20 },
  5,
  10
);
const blueRectangle: Shape = redRectangle.clone();
blueRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(blueRectangle);
