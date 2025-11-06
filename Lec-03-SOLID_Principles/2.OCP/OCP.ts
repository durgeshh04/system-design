interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  constructor() {}

  giveDiscount(): number {
    return 10;
  }
}

// new feature adding easily without modifying or touching the existing code
class GoldCustomer implements Customer {
  constructor() {}
  giveDiscount(): number {
    return 30;
  }
}

class PremiumCustomer implements Customer {
  constructor() {}

  giveDiscount(): number {
    return 50;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const discount: Discount = new Discount();

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
console.log("Premium Customer:", discount.giveDiscount(premiumCustomer));

const regularCustomer: RegularCustomer = new RegularCustomer();
console.log("Regular Customer:", discount.giveDiscount(regularCustomer));

const goldCustomer: GoldCustomer = new GoldCustomer();
console.log("Gold Customer:", discount.giveDiscount(goldCustomer));
