interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcreatePrototype implements Prototype {
  private user: UserDetails;
  constructor(user: UserDetails) {
    this.user = user;
  }

  clone(): Prototype {
    let clone = { ...this.user };
    return new ConcreatePrototype(this.user);
  }

  getUserDetails(): UserDetails {
    return this.user;
  }
}

function clientCode() {
  const p1 = new ConcreatePrototype({
    name: "abc",
    age: 23,
    email: "abc@gmail.com",
  });
  const p2 = p1.clone();

  if (p2.getUserDetails() == p1.getUserDetails()) {
    console.log("Clonned objects are the same instance.");
  } else {
    console.log("Clonned objects are different instance.");
  }
}
clientCode();
