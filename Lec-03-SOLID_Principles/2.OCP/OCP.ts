interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  constructor() {}

  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

// new feature adding easily without modifying or touching the existing code
class GoldCustomer implements Customer {
  constructor() {}

  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class DiamondCustomer implements Customer {
  constructor() {}

  giveDiscount(): number {
    return 50;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

// Implemented SRP principle as well here
class LoyaltyPoints {
  addPoints(customer: Customer, amountSpent: number): number {
    return customer.addLoyaltyPoints(amountSpent);
  }
}

const discount: Discount = new Discount();

const diamondCustomer: DiamondCustomer = new DiamondCustomer();
console.log("Diamond Customer:", discount.giveDiscount(diamondCustomer));

// Add Loyalty points for the diamond users:
const loyaltyPoints: LoyaltyPoints = new LoyaltyPoints();
console.log(loyaltyPoints.addPoints(diamondCustomer, 500));

const regularCustomer: RegularCustomer = new RegularCustomer();
console.log("Regular Customer:", discount.giveDiscount(regularCustomer));

const goldCustomer: GoldCustomer = new GoldCustomer();
console.log("Gold Customer:", discount.giveDiscount(goldCustomer));
