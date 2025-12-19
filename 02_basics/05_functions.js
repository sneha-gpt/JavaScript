function sum(a, b){
    console.log(a + b);
}

const res = sum(3, 4);
console.log(res); // 7 undefined(not returning)

function loginUser(name){
    return `${name} just logged in`
}

console.log(loginUser("Sneha"));
console.log(loginUser());


function login(username){
    if(!username)
    {
       return "Please provide username";
    }

    return `${username} just logged in`;

}

console.log(login());
console.log(login("sneha"));


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    name: "Sneha", 
    age: 18
}

function handleObject(user)
{
   return `Name is ${user.name} and age is ${user.age}`;
}

console.log(handleObject(user));

const user2 = {
    name: "Sneha"
}

console.log(handleObject(user2));