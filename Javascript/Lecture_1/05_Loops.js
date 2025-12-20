// for while do-while forin forof foreach 

// Till 8
for(let i = 1;i <= 10;i++)
{
    if(i === 8)
     break;

    console.log(i);
}

// To skip 8
for(let i = 1;i <= 10;i++)
{
    if(i === 8)
     continue;

    console.log(i);
}

// Ask a user a number and print whether number from 1 to that number is even or odd

// let num = prompt("Number: ");

// for(let i = 1;i <= num;i++)
// {
//     if(i%2 === 0)
//         console.log(`${i} is even`);
//     else 
//         console.log(`${i} is odd`);
// }


//for..of

for(let ch of "Sneha"){
    console.log(ch);
}

//forEach

let nums = [10, 20, 30];
nums.forEach((num) => {
    console.log(num);
});

//for..in
let user = {
    name: "Sneha", 
    age: 20
}

for(let key in user){
    console.log(key, user[key]);
}

const colors = ["red", "green", "blue"];

colors.forEach((color) => {
    
})