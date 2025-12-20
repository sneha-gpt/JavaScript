// Arithmetic
// + - * / % **

console.log(2**3);
console.log(7/2);
console.log(7%2);

// Comaprsion
// == === != !== >= <= > < 

console.log(12 == "12");
console.log(12 === "12");

console.log(12 != "12"); //false 
console.log(12 !== "12"); //true 

// Assignment 
// = += -= *= %= /=

let a = 131;
a %= 2;
console.log(a);

// Logical 

console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!!!true); 

// Unary 
// Works in single value 
// + - ! typeof ++ -- 

console.log(typeof(+"5")); //number 


// Ternary 

4 > 6 ? console.log("4") : console.log("6") 

// instanceof 

class Person {}

let p1  = new Person();

console.log(p1 instanceof Person);
console.log(p1 instanceof Object);

let arr = [1, 2, 4];
console.log(arr instanceof Array);

let number = 12;
console.log(number instanceof Number) // false 

// instanceof -> Reference datatypes

// typeof -> Primitive Datatype 