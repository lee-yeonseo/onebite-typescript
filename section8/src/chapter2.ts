/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

// const person: Person = {
//   name: "이연서",
//   age: 25,
// };

// getPropertyKey(person, "name"); // 이연서

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이연서",
  age: 25,
};

getPropertyKey(person, "name"); // 이연서
