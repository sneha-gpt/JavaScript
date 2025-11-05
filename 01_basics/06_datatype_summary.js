// Primitive (Call by Value)

// Non-Primitive (Call by Reference)

//Array 

const fruits = ["Apple", "Banana"];
console.log(fruits);

//Object

const myObj = {
    name: "Sneha", 
    age: 21
}

console.log(myObj);

// Function
const myfunc = function(){
    console.log("Hello");
}

console.log(myfunc);
myfunc();

console.log(a);
var a = 5;


// ---------------------------------------------------------------

// Stack (Primitive)   Heap(Non-Primitive)

let fruit1 = "Apple";
let fruit2 = fruit1;
fruit2 = "Banana";

console.log(fruit1);
console.log(fruit2);

let userOne = {
    name: "Sneha"
}

let userTwo = userOne;
console.log(userOne);
userTwo.name = "Shreya";

console.log(userOne);
console.log(userTwo);