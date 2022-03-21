// // {OBJECTS}

// //                0       1         2             3
var animals = ["lion", "zebra", "elephant", "giraffe"];

// // 1
// for (let i=0; i<animals.length; i++) {
//     console.log(animals[i]);
// }

// // 2
// animals.map((animal) => console.log(animal));
// animals.forEach((animal) => console.log(animal));

// // 3
for (someElement of animals) {
    console.log(someElement);
}

// // ---------------
// let = message = "hello";

// message[0]= "H"; // cannot do in strings

// for (let i =0; i<message.length; i++) {
//     console.log(message[i]);
// }
// for (someChar of message) {
//     console.log(someChar);
// }

// ----------------
const doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
}

for (someKey in doggo) {
    console.log(someKey, doggo[someKey]);
}

// 
const doggoKeys = Object.keys(doggo) // returns an array with all the keys in the doggo obj
console.log(doggoKeys);

const doggoValues = Object.values(doggo); // returns an array with all the VALUES in the doggo obj
console.log(doggoValues);

const doggoEntries = Object.entries(doggo); // returns a 2d array of key-value[]
console.log(doggoEntries);

// check if a key exists in the Obj
doggo.hasOwnProperty("name") // returns T/F is a key exists
console.log(doggo.hasOwnProperty("name")); // o(1) 