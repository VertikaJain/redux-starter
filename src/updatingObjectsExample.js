/* 
// Object assignment Example
const person = { name: "vertika" }
export const updatedPerson = Object.assign({}, person, { name: "vj", age: 25 })
console.log(updatedPerson);
updatedPerson.name = "dimpy";
console.log(updatedPerson);
console.log(person);
 */

/* 
// Spread Operator Example
const person = { name: "vertika" }
const updatedPerson = { ...person, name: "vj", age: 25 }
console.log(updatedPerson);
updatedPerson.name = "dimpy";
console.log(updatedPerson);
console.log(person); */

const person = {
  name: "vertika",
  address: {
    city: "abc",
    state: "xyz"
  }
}
/* 
// Shallow copy
const updatedPerson = { ...person, name: "vj" }
updatedPerson.address.city = "pqr";
console.log(updatedPerson); // city will be "pqr"
console.log(person); // city will be "pqr" */

// Deep Copy
const updatedPerson = {
  ...person,
  address: { ...person.address, city: "pqr" },
  name: "vj"
}
console.log(updatedPerson); // city will be "pqr"
console.log(person); // city will be "abc" 