// Deklarasi tuple
let person: [string, number, boolean] = ["John", 30, true];

// Tuple untuk koordinat
let coordinate: [number, number] = [10.5, 20.1];

// Tuple dengan optiona element
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 20];

// Detructuring tuple
let [name, age, isEmploed] = person;
console.log("Name : ", name);
console.log("Age : ", age);
console.log("Employed : ", isEmploed);

// Tuple di dalam array
let employes: [string, number][] = [
  ["John", 30],
  ["Jane", 25],
  ["Bob", 35],
];

employes.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
