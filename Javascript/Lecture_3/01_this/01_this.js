// Global
console.log(this);

// Function
function fn(){
    console.log(this);
}

fn();

// Method

let user = {
    name: "Sneha", 
    task: function(){
        console.log(this);
    }
}

console.log(user.task());

// Event Handlers

let btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
    console.log(this);
})

// class

class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(this.name);
    }
}

let p = new Person("Sneha");
p.greet();

