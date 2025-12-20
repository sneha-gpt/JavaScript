// if else-if else

function getGrade(score){
    if(score <= 32)
        return "Fail";
    if(score <= 59)
        return "D";
    if(score <= 69)
        return "C";
    if(score <= 79)
        return "B";
    if(score <= 89)
        return "A";
    if(score <= 100)
        return "A+"
    return "Invalid Marks"
}

console.log(getGrade(600));

// switch 

function IdentifyColor(color){
    switch(color){
        case "Blue":
            console.log("blue");
            break;
        case "Green":
            console.log("Green");
            break;
        default:
            console.log("Red");

        return;
    }
}

console.log(IdentifyColor("Blue"))

// Early Return Pattern
// Return from the function asap 

function getDiscount(price){
    if(price > 0){
        if(price > 1000)
            return price*0.2;
        else 
            return price*0.1;
    }else{
        return 0;
    }
}

function getDiscount2(price){
    if(price <= 0)
        return 0;

    if(price <= 1000)
        return price*0.1;

    return price*0.2;
}

console.log(getDiscount(100));
console.log(getDiscount(2000));


// Practice: Rock-paper-scissor

function rps(user, computer){
    
    if(user === computer)
        return "Draw";

    if(user === "r" && computer === "s") return "user";
    if(user === "p" && computer === "r") return "user";
    if(user === "s" && computer === "p") return "user";

    return "computer";

}

console.log(rps("p", "s"));

// Switch starts executing from the matching case 
// Continues executing until 
// -> a break is found 
// -> the switch block ends 

let x = 2;
switch(x){
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    case 3:
        console.log("3");
}