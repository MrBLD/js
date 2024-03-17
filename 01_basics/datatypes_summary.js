//  Primitive // default call by value

//  7 types : String, Number, Boolearn, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non primitive) // def pass by reference

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; // object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(1, typeof anotherId, anotherId);
console.log(2, typeof bigNumber);
console.log(3, typeof heroes);
console.log(4, typeof myobj);
console.log(5, typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(Primitive//copy), Heap (Non-Primitive)

let King="Ben"
let who=King
who="Mr.BLD"

// in the heap // used by reference
let Kingdom={
    ruler:King,
    name:"Ben",
    arm:"orion_arm",
    galaxy:"Milky_way",
    supercluster:"Virgo"
}

let Kingdom2=Kingdom
Kingdom2.name="Bhaskar"

console.log(Kingdom.name);
console.log(Kingdom2.name);