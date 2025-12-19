const JsUser = {
    name: "Sneha",
    age: 21,
    "location": "Bhopal",
    "full name": "Sneha Gupta"
}

console.log(JsUser.name);
console.log(JsUser.location);
console.log(JsUser["full name"]);

//-----------------------Symbol as Key------------------------

const mySymbol = Symbol("key1");

const user = { 
    [mySymbol] : "mykey1"
}

console.log(user[mySymbol]);

//------------------------------Freeze Object--------------------

// JsUser.name = "Radhika";
// Object.freeze(JsUser);
// console.log(JsUser.name);

// JsUser.name = "Sneha";
// console.log(JsUser.name);

JsUser.greeting = function(){
    console.log(`Hello ${JsUser["name"]}`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

JsUser.greetingTwo();


const obj1 = {
    1: "a", 
    2: "b"
}

const obj2 = {
    3: "c", 
    4: "d"
}

const obj3 = {obj1, obj2};
console.log(obj3);

// Object.assign(obj1, obj2); 
// console.log(obj1);

const obj4 = Object.assign({}, obj1, obj2); // ({} -> target, obj1, obj2, obj3 -> source)
console.log(obj1);
console.log(obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj4};
console.log(obj5);





