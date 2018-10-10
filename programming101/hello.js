var greeting = "dale, ";
console.log(greeting);
let primes = [2,3,5,7,11,13];
let names =["tina","nick","anna","andy"];

let nick = names.indexOf("nick");
names.splice(1,1);
console.log( primes );
console.log(names);
console.log(nick);

let name = process.argv[2];

console.log(greeting + name);


let age = process.argv[2]
let drinkingAge = 21

if (age >= drinkingAge){
  console.log("welcome to the bar")
};
