//---------------------Array of Objects-------------------------

const user = [
    {
        name: "Sneha", 
        age: 20,
        location: "Bhopal"
    },
    {
        name: "Radhika", 
        age: 21, 
        location: "Pune"
    }
]

console.log(user[1].name);

//---------------------Destructure in Object (also possible in array)---------------

const user2 = {
    fullname: "Sneha Gupta",
    location: "bhopal"
}

const {fullname, location} = user2
console.log(fullname);
console.log(location)

// const {fullname: name} = user2;
// console.log(name);
