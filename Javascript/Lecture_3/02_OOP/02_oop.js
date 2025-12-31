function CreatePencil(name, price, color){
    this.name = name;
    this.price = price;
    this.color = color;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
    }
}

let p1 = new CreatePencil("Nataraj", 10, "Black");
let p2 = new CreatePencil("Doms", 5, "red");

// Prototype
// To save memory as all object require the same function/variable

CreatePencil.prototype.write_name = function(){
    console.log(this.name);
}

CreatePencil.prototype.product = "Pencil";

p1.write_name();
p2.write_name();

console.log(p1.product);
console.log(p2.product);

// ES6 Alternative: Class

class CreatePen{
    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    sayHi(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase(){
        let h1 = document.querySelectorAll("h1");
        h1.forEach((e) => {
           if(e.style.color === this.color)
             e.remove();
        })
    }
}

let P1 = new CreatePen("Elkos", 10, "black");
let P2 = new CreatePen("cello", 10, "blue");


// Inheritance : exptends and super
// Classical Inheritance 

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.role = "User";
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.role} - ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name, age){
        super(name, age);
        this.role = "Admin";
    }

    erase(){
        let h1 = document.querySelectorAll("h1");
        
        h1.forEach((e) => {
           e.remove();
        })
    }
}

let u1 = new User("Sneha", 21);
let a1 = new Admin("Rahul", 24);

// Prototypal Inheritance

let coffee = {
    color: "dark",
    drink: () => {
        console.log("Gut Gut Gut");
    }
}

let tea = Object.create(coffee);
tea.drink();