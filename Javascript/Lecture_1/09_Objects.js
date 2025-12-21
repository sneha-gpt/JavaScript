//Create object
let obj = {
    name: "Sneha", 
    age: 20
};

console.log(obj);
console.log(obj.age);
console.log(obj['name']);

let aa = "name";
console.log(obj.aa); // undefined
console.log(obj[aa]); // Sneha 

// Deep Access

let user = {
    name: "Sneha", 
    address: {
        state: "MP",
        city: {
            district: "Satna", 
            pincode: 485001
        }
    }
}

console.log(user.address.city.pincode)

// console.log(user.addres.city.pincode) 

// TypeError: Cannot read properties of undefined (reading 'city') (Error in just before city (reading city))

// Object Destructuring 

let {district, pincode} = user.address.city;

console.log(district);
console.log(pincode);

// Looping 
for(let key in user){
    console.log(key, user[key]);
}

function print(obj, parentkey = ""){
   
    for(let key in obj){
        let fullKey = parentkey ? `${parentkey}.${key}` : key;

        if(typeof obj[key] === 'object' && obj[key] !== null)
        {
            print(obj[key], fullKey);
        }
        else 
            console.log(fullKey + ": " + obj[key]);
    }
}

print(user);

console.log(Object.keys(user));

// Print keys 
function printKeys(obj, parentkey = ""){

    for(let key in obj){
        let fullKey = parentkey ? `${parentkey}.${key}` : key;
        if(typeof obj[key] !== "object")
            console.log(fullKey);
        else if(obj[key] !== null)
            printKeys(obj[key], fullKey);
    }
}

printKeys(user);

// Print Keys Using Object Keys 
function printKeysUsingObjectKeys(obj, parentkey = ""){
    Object.keys(obj).forEach(key => {
        let fullKey = parentkey ? `${parentkey}.${key}` : key;

        console.log(fullKey);

        if(typeof obj[key] === "object" && obj[key] !== null)
             printKeysUsingObjectKeys(obj[key], fullKey);
    });
}

printKeysUsingObjectKeys(user);

// Object entries

console.log(Object.entries(user));

// Copying Objects

// Spread operator
let user2 = {...user};

// user2.address.city = "Bhopal";
// console.log(user2);
// console.log(user); // changed for user also becuase only user is copied using spread operator not address therefore problem with nested objects

// Deep Clone 

let user3 = JSON.parse(JSON.stringify(user));

user3.address.city.district = "Bhopal";
console.log(user3);
console.log(user);

// Object.assign 
let user4 = Object.assign({age: 20}, user);
// console.log(user4);

let role = "admin";

let abc = {
    [role] : "Sneha"
}

console.log(abc);