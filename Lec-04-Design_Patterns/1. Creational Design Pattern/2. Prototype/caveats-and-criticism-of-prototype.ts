// Shallow Copy VS Deep Copy

const original = {
  name: "abc",
  address: {
    city: "Pune",
    address: "Hinjewadi phase-1",
    pincode: 123456,
  },
};

const shallowCopy = JSON.parse(JSON.stringify(original));

console.log(original);
console.log(shallowCopy);

shallowCopy.name = "xyz";
shallowCopy.address.city = "PCMC- Mulshi";
console.log("\nafter changing name:\n");
console.log(original);
console.log(shallowCopy);
