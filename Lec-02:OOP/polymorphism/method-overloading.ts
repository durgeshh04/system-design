// ---------------------------------------------
// 1. Single Class
// ---------------------------------------------
class Calculator {
  // 💡 OVERLOADING Signatures (Ad-Hoc Polymorphism):
  // Different number of parameters
  add(a: number, b: number): number;
  // Different type of parameters
  add(a: string, b: string): string;
  // ---------------------------------------------

  // The actual implementation must cover all signatures
  add(a: number | string, b: number | string, c?: number): number | string {
    if (typeof a === "number" && typeof b === "number" && c) {
      return a + b + c;
    }
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return `[Overloading] Concatenated: ${a}${b}`;
    }
    // Fallback logic...
    return 0;
  }
}

const calc = new Calculator();

// 🌐 Usage 1 (Two numbers): The compiler chooses the 'number, number' version
console.log(`\n[Overloading] 10 + 20 = ${calc.add(10, 20)}`);

// 🌐 Usage 2 (Two strings): The compiler chooses the 'string, string' version
console.log(calc.add("Hello", "World"));
