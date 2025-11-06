abstract class PaymentProcess {
  abstract processPayment(amount: number): void;
}

class CreaditCard extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount ${amount}`);
  }
}

class DebitCard extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount ${amount}`);
  }
}

class PayPal extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing Paypal Payments - Amount ${amount}`);
  }
}

function executePayment(paymentMode: PaymentProcess, amount: number) {
  return paymentMode.processPayment(amount);
}

const creditCard = new CreaditCard();
const debitCard = new DebitCard();
const payPal = new PayPal();

executePayment(creditCard, 100);
executePayment(debitCard, 150);
executePayment(payPal, 500);
