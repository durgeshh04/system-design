class Product {
  constructor(
    public id: number,
    public price: number,
    public description: string
  ) {}

  public display(): void {
    console.log(
      `Product Details: ${this.id} | ${this.price} | ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    public id: number,
    public price: number,
    public description: string,
    public author: string,
    public title: string
  ) {
    super(id, price, description);
  }

  // override the display method
  public display(): void {
    super.display();
    console.log(
      `Book Details: ${this.id} | ${this.price} | ${this.description} | ${this.author} | ${this.title}`
    );
  }
}

class Electronic extends Product {
  constructor(
    public id: number,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  public display(): void {
    super.display();
    console.log(
      `Electronics Details: ${this.id} | ${this.price} | ${this.description} | ${this.brand} | ${this.model}`
    );
  }
}

const book = new Book(
  5,
  299,
  "Understanding my habits and exploring myself",
  "Durgesh Chaudhari",
  "Finding Myself"
);

book.display();

const electronic = new Electronic(
  1,
  999,
  "High-end smartphone",
  "Samsung",
  "Galaxy S21"
);

electronic.display();
