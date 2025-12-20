// Primitive (Store by Value)

// string, number, boolean, null, undefined, symbol, bigint

let s1 = "hello"
let s2 = 'hello'
let s3 = `hello`

let n1 = 12
let n2 = 12.3

let a = true
let b = false

let selectedStudents = null //not selected till now 

let u; //by default undefined 


//Symbol //unique and immutable value 

let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2) //false 


const user = {
    name: "Sneha",
    uid: 1
}

let id = Symbol("uid");
user[id] = 2;

console.log(user);

// BigInt

let xyz = 12n;
console.log(xyz + 3n);

// Reference (Store by Reference)

// array, objects, functions

let obj1 = {
    name: "Sneha"
}

let obj2 = obj1;

obj2["name"] = "harshita";
console.log(obj1);
console.log(obj2);

// Dynamic Testing 

let k = 12;

k = null;
console.log(k);

k = true;
console.log(k);

// Types of Quirks 

console.log(1 === '1');
console.log(1 == '1');

// Type Coercion

console.log("5" + 1);
console.log("5" - 1);

// Truthy or Falsy Values 

console.log(!!NaN);

// Why typeof NaN -> number 

console.log(2*"Sneha"); // Multiplication not possible (failed operation of Number therefore gives NaN and type of that is number)


