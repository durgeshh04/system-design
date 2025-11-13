interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  operationA(): string {
    return "The result of the operation A1.";
  }
}

class ProductB implements IProductB {
  operationB(): string {
    return "The result of the operation B1.";
  }

  combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class Factory1 implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}

const factory: Factory1 = new Factory1();
const productA = factory.createProductA();
const productB = factory.createProductB();
console.log(productA.operationA());
console.log(productB.combinedOperation(productA));
// console.log(productB.operationB());
