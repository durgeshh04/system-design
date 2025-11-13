abstract class PaymentProcessor {
  constructor(public amount: number) {}
  abstract processPayments(): void;
}

class PaypalProcessor extends PaymentProcessor {
  processPayments(): void {
    console.log(`Processing PayPal payment of $${this.amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  processPayments(): void {
    console.log(`Processing Stripe payment of $${this.amount}`);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  processPayments(): void {
    console.log(`Processing Bank Transfer payment of $${this.amount}`);
  }
}

class PaymentProcessorFactory {
  public createProcessor(type: "paypal" | "stripe" | "bank", amount: number) {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);

      case "stripe":
        return new StripeProcessor(amount);

      case "bank":
        return new BankTransferProcessor(amount);
        break;

      default:
        throw new Error("This is a wrong option please select correct one...");
    }
  }
}

const paymentProcessor = new PaymentProcessorFactory();

const paypal = paymentProcessor.createProcessor("paypal", 5000);
paypal.processPayments();

const stripe = paymentProcessor.createProcessor("stripe", 5000);
stripe.processPayments();

const bank = paymentProcessor.createProcessor("bank", 5000);
bank.processPayments();
