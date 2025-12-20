// function declaration 

function x(){

}

// function expression 
let y = function(){

}

//fat arrow function
let z = () => {

}

// Default 
function add(n1, n2){
    return n1 + n2;
}

console.log(add()); //NaN

function add2(n1 = 0, n2 = 0){
    return n1 + n2;
}

console.log(add2(4, 5));

// Rest (Used in Array and Object -> Spread )
function abc(a, b, ...val){
    console.log(a, b, val);
}

abc(1, 2, 4, 5, 6);

// First Class Function 

let xyz = function(val){ // HOF - parameter function 
    val();
}

xyz(function(){
    console.log("hi");
})

// Higher-Order Function 
// Parameter - function || Return Function 

let mn = function(){
    return function(){
        console.log("Hello");
    }
}

mn()();

// Practice
// Array of Functions 
let arr = [
    () => {
        return "Sneha";
    }, 
    () => {
        return "Gupta";
    }
]

arr.forEach((i) => {
    console.log(i());
})

// Pure and Impure Functions 
// Pure Function -> doesnt change the value of external variables 

function square(x){
    return x*x;
}

//Impure Function -> change the value of external variable 

let num = 3;
function cybe(num){
    num = num*num*num;
}

// CLosures

function fn(){
    let a = 13;
    return function(){
        console.log(a);
    }
}

fn()();

// Scoping 

function outer(){
    let a = 12;
    function inner(){
        return a;
    }
    console.log(inner());
}

console.log(outer());

// IIFE (Immediate Invoked Function Expression)

function iife(){

}

iife();

//iife 
(function iife2(){

})();