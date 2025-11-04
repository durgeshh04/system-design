class BankAccount {
  private _balance: number;
  constructor(balance: number) {
    this._balance = balance;
  }

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.warn("Please enter valid amount deposit");
      return;
    }
    this._balance += amount;
  }

  public withdrawal(amount: number): void {
    if (amount <= 0 || amount > this._balance) {
      console.warn("Please enter valid amount for withdrawal");
      return;
    }
    this._balance -= amount;
  }
}

const bank = new BankAccount(1000);
console.log(bank.balance);
bank.deposit(500);
bank.withdrawal(80);
console.log(bank.balance);
bank.withdrawal(1500);
console.log(bank.balance);
bank.deposit(0);
bank.withdrawal(500);
console.log(bank.balance);
