let a = 10
const b = 20
var c = 30

if(true)
{
    let a = 34;
    const b = 56;
     var c = 500;
}

// console.log(a);
// console.log(b);
// console.log(c); // Issue with var (print 500) (globally scoped)


function one(){
    const username = "Sneha";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);  // cannot access out of scope 

    two();
}

one();

console.log(addOne(5))

function addOne(num){
    return num+1;
}

// console.log(addTwo(4)); // cannot access expression before declaration 
    
const addTwo = function(num){ // Expression
    return num+2;
}
console.log(addTwo(4));
