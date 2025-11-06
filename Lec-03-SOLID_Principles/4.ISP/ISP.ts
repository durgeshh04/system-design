interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    // actual implementation
  }
}

class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    // actual implementation
  }

  scan(document: Document): void {
    // actual implementation
  }

  fax(document: Document): void {
    // actual implementation
  }
}
