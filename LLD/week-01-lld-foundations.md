# Week 01 — LLD Foundations: Object-Oriented Design Principles

> **Phase:** 1 — Low Level Design  
> **Week:** 1 of 24  
> **Goal:** Understand *why* OOP exists, the 4 pillars, and how to think in objects before writing a single line of design.

---

## 📍 What is Low Level Design (LLD)?

Low Level Design is the process of defining **how** a system or component works internally:

- Which classes exist
- What responsibilities each class holds
- How objects communicate with each other
- What data structures and algorithms are used under the hood

LLD sits between "I know the requirements" and "I'm writing code". It's the **blueprint** before the building.

> **Staff engineer insight:** Bad LLD is the #1 reason codebases become unmaintainable. Every "spaghetti" codebase you've ever seen was once someone skipping this step.

---

## 📍 Why OOP? (The Real Reason)

You've been *using* OOP. Now let's understand *why it exists*.

Before OOP, programs were procedural — a sequence of functions operating on global data. As systems grew, this created:

- No clear ownership of data
- Changes in one place breaking things everywhere
- Impossible to reason about large codebases

OOP was invented to solve one core problem: **managing complexity by bundling data and behavior together, and controlling who can touch what.**

Think of it this way:

```
Procedural world:
  Data floats around freely.
  Anyone can modify anything.
  Chaos at scale.

OOP world:
  Data is owned by an object.
  Only that object controls its own data.
  The outside world must ask politely (via methods).
```

---

## 📍 The 4 Pillars of OOP

### 1. Encapsulation

**What it is:** Bundling data (fields) and behavior (methods) together, and hiding internal details.

**Why it matters:** You protect your object's internal state. External code can't corrupt it.

```java
// BAD — No encapsulation
class BankAccount {
    public double balance; // Anyone can set balance to -9999
}

// GOOD — Encapsulated
class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) balance += amount; // Controlled!
    }

    public double getBalance() {
        return balance;
    }
}
```

> **Rule of thumb:** If a field is `public`, ask yourself "do I trust every piece of code in my system to modify this correctly?" If not — encapsulate it.

---

### 2. Abstraction

**What it is:** Hiding the *how*, exposing only the *what*.

**Why it matters:** Users of your class only need to know what it does, not how it works. You can change the internals freely.

```java
// The user of this class doesn't know if we use SQL, NoSQL, or files.
// They just call save() and trust it works.
interface UserRepository {
    void save(User user);
    User findById(String id);
}

class MySQLUserRepository implements UserRepository {
    public void save(User user) { /* SQL magic here */ }
    public User findById(String id) { /* SQL magic here */ }
}
```

> **Analogy:** You drive a car without knowing how the engine works. The steering wheel and pedals are the **abstraction** — the interface you interact with.

---

### 3. Inheritance

**What it is:** A child class acquires the properties and behaviors of a parent class.

**Why it matters:** Reuse common logic. Express "is-a" relationships.

```java
class Animal {
    String name;
    void breathe() { System.out.println("Breathing..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Woof!"); }
}

// Dog IS-A Animal. It can breathe() AND bark().
```

**⚠️ The Inheritance Trap (very important):**

Inheritance is *overused* by beginners. It creates tight coupling. Ask yourself:

- Is this truly an "is-a" relationship, or is it just "shares some behavior"?
- If it's the latter → use **composition** instead.

```java
// BAD — inheritance misused
class Stack extends ArrayList { ... }
// Stack IS-NOT-A ArrayList. It just uses one internally.

// GOOD — composition
class Stack {
    private ArrayList list; // HAS-A ArrayList
}
```

> **Prefer composition over inheritance** — you'll hear this constantly in design discussions. We'll cover it deeply in Week 2.

---

### 4. Polymorphism

**What it is:** The same method call behaves differently depending on the actual object type.

**Why it matters:** Write code that works against abstractions, not concrete implementations. New behavior = new class, no changes to existing code.

```java
// All shapes have area() but compute it differently
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;
    double area() { return Math.PI * radius * radius; }
}

class Rectangle extends Shape {
    double width, height;
    double area() { return width * height; }
}

// This function works for ALL shapes — present and future
void printArea(Shape shape) {
    System.out.println(shape.area()); // Polymorphic call
}
```

**Two types of polymorphism:**

- **Compile-time (method overloading):** Same method name, different parameters.
- **Runtime (method overriding):** Child class overrides parent method. This is the powerful one.

---

## 📍 SOLID Principles — The Rules That Separate Good Code from Great Code

SOLID is an acronym for 5 design principles. Every senior/staff engineer thinks in SOLID automatically. You will too.

---

### S — Single Responsibility Principle (SRP)

> *A class should have only one reason to change.*

A class that does too many things becomes a liability — change one thing and you risk breaking another.

```java
// BAD — This class has 3 responsibilities
class UserService {
    void createUser(User u) { /* DB logic */ }
    void sendWelcomeEmail(User u) { /* Email logic */ }
    void generateReport(User u) { /* Report logic */ }
}

// GOOD — Each class owns one concern
class UserRepository { void save(User u) { ... } }
class EmailService { void sendWelcome(User u) { ... } }
class ReportGenerator { void generate(User u) { ... } }
```

**How to spot an SRP violation:** Look for the word "and" in a class description. "This class saves users *and* sends emails" → violation.

---

### O — Open/Closed Principle (OCP)

> *Classes should be open for extension, closed for modification.*

You should be able to add new behavior without changing existing, tested code.

```java
// BAD — Every new discount type requires modifying this class
class DiscountCalculator {
    double calculate(String type, double price) {
        if (type.equals("STUDENT")) return price * 0.8;
        if (type.equals("SENIOR")) return price * 0.7;
        // Adding "EMPLOYEE" requires changing this class
    }
}

// GOOD — New discount = new class, no changes
interface DiscountStrategy {
    double apply(double price);
}
class StudentDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.8; }
}
class SeniorDiscount implements DiscountStrategy {
    public double apply(double price) { return price * 0.7; }
}
class DiscountCalculator {
    double calculate(DiscountStrategy strategy, double price) {
        return strategy.apply(price);
    }
}
```

---

### L — Liskov Substitution Principle (LSP)

> *Subclasses must be substitutable for their parent class without breaking the program.*

If you have code that works with a `Bird`, it should work with any subclass of `Bird` without surprises.

```java
// VIOLATION — Penguin extends Bird, but can't fly
class Bird {
    void fly() { System.out.println("Flying!"); }
}
class Penguin extends Bird {
    void fly() { throw new UnsupportedOperationException(); } // BREAKS LSP
}

// FIX — Redesign the hierarchy
interface Bird { void eat(); }
interface FlyingBird extends Bird { void fly(); }
class Sparrow implements FlyingBird { ... }
class Penguin implements Bird { ... } // Penguin doesn't claim to fly
```

**The LSP test:** Can you replace a parent type with a child type everywhere and have everything still work correctly? If yes → LSP is satisfied.

---

### I — Interface Segregation Principle (ISP)

> *No client should be forced to depend on methods it doesn't use.*

Fat interfaces create unnecessary dependencies. Split them.

```java
// BAD — A Printer is forced to implement fax() it doesn't support
interface Machine {
    void print();
    void scan();
    void fax();
}

// GOOD — Lean, focused interfaces
interface Printer { void print(); }
interface Scanner { void scan(); }
interface FaxMachine { void fax(); }

class SimplePrinter implements Printer { ... }  // Only what it needs
class AllInOne implements Printer, Scanner, FaxMachine { ... }
```

---

### D — Dependency Inversion Principle (DIP)

> *High-level modules should not depend on low-level modules. Both should depend on abstractions.*

This is the most powerful principle. It decouples your code completely.

```java
// BAD — OrderService is tightly coupled to MySQLDatabase
class OrderService {
    private MySQLDatabase db = new MySQLDatabase(); // Direct dependency!
    void placeOrder(Order o) { db.save(o); }
}

// GOOD — OrderService depends on an abstraction
interface Database { void save(Order o); }

class OrderService {
    private Database db; // Depends on interface, not implementation

    OrderService(Database db) { this.db = db; } // Injected from outside

    void placeOrder(Order o) { db.save(o); }
}

// Now you can inject MySQL, PostgreSQL, or even a Mock in tests
new OrderService(new MySQLDatabase());
new OrderService(new MockDatabase()); // For unit tests!
```

> **This principle is the foundation of dependency injection (DI) and IoC containers** you see in Spring, .NET, NestJS, etc. Now you know *why* they exist.

---

## 📍 Putting It All Together — How to Think in Objects

When you face a new design problem, follow this mental process:

**Step 1: Identify the nouns** → These become your classes/objects.  
**Step 2: Identify the verbs** → These become your methods.  
**Step 3: Assign responsibilities** → Which class *owns* each behavior? (SRP)  
**Step 4: Define relationships** → Is-a (inheritance) or Has-a (composition)?  
**Step 5: Define interfaces/contracts** → What does the outside world need to know?  
**Step 6: Apply SOLID** → Review each class against the 5 principles.

---

## 📍 Mini Design Exercise

**Problem:** Design a basic parking lot system.

Try it yourself before reading the approach below.

```
Nouns: ParkingLot, ParkingSpot, Vehicle, Car, Motorcycle, Ticket
Verbs: parkVehicle(), removeVehicle(), generateTicket(), calculateFee()

Responsibilities:
- ParkingLot: manages spots, entry/exit flow
- ParkingSpot: knows its own type (compact/large), occupied status
- Vehicle: knows its own type and registration
- FeeCalculator: calculates fee (SRP — separate from ParkingLot)
- Ticket: holds entry time, spot, vehicle

Relationships:
- Car IS-A Vehicle (inheritance)
- ParkingLot HAS-A list of ParkingSpots (composition)
- Ticket HAS-A Vehicle, HAS-A ParkingSpot

Interfaces:
- FeeStrategy (OCP — different fee rules for different vehicle types)
```

We'll fully implement this in **Week 2** when we cover Design Patterns.

---

## 📍 Key Takeaways

- OOP exists to **manage complexity** by giving data clear ownership and controlling access.
- **Encapsulation** = protect state. **Abstraction** = hide complexity. **Inheritance** = reuse (carefully). **Polymorphism** = flexible behavior.
- **SOLID** is not a checklist — it's a way of thinking. Apply it naturally.
- **Composition over Inheritance** is a recurring theme you'll hear everywhere.
- **Dependency Inversion** is why frameworks like Spring exist. Now you know.

---

## 📍 What's Coming Next Week

**Week 02 — Design Patterns Part 1: Creational & Structural Patterns**

- Singleton, Factory, Abstract Factory, Builder
- Adapter, Decorator, Facade, Proxy
- We'll implement the Parking Lot system fully

---

## 📚 Recommended Reading (Optional but Gold)

- *Clean Code* — Robert C. Martin (Chapters 1–5)
- *Head First Design Patterns* — Chapter 1
- [Refactoring Guru — SOLID](https://refactoring.guru/solid-principles) — great visual explanations

---

*Notes maintained by: [Your Name] | Started: [Date] | Repo: staff-engineer-journey*
