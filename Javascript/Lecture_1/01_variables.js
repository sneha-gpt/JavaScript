(function(){
    if(true)
    {
        var a = 12;
    }
    console.log(a); // can access - function scoped 
})();

// Scope (global, block, functional)

var b = 12; //global

{ // block
    let c = 13; 
}

function abcd(){ // functional 
    
}

// Temporal Dead Zone 

// console.log(a); 
// let a = 12;

// Hoisting 

console.log(x); 
var x = 15;

// var x; // Hoisted 
// console.log(x);
// x = 15

hello();

function hello(){
    console.log("Hi");
}

hi();

let hi = function(){
    console.log("hello");
}

{
  console.log(y);
  let y = 5;
}


// Block level counter (using let and const )

// let

if(true)
{
    let cnt = 0;
    cnt += 2;
    console.log(cnt);
}

// console.log(cnt) // Reference error

// const 

if(true)
{
    //const cnt = 1;
    // cnt += 2 // TypeError: Assignment to const variable
    
    const cnt = {value : 1};
    cnt.value += 2; // Updation is allowed 
    // cnt = {} // not allowed 
    console.log(cnt.value);
}

console.log(cnt) // Reference Error 


function ab(){
    var a = 10;

}

console.log(a); // cannot access (var is functionally scoped)