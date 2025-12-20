// Use rest parameter to accept any number of scores and return the total 

function getScore(...scores){
    let ans = 0;
    for(let i of scores){
       ans += i;
    }
    return ans;
}

console.log(getScore(1, 2, 3, 4));

// BMI Calculator

function bmi(weight, height){
    return weight / (height * height);
}

console.log(bmi(68, 1.6).toFixed(2));

// Dicount Calculator using HOF

function discountCal(discount){
    return function(price){
           return price - price * (discount / 100);
    }
}

console.log(discountCal(10)(200));

// Counter using Closure 

function counter(){
    let count = 0;
    return function(){
        count++;
        return  count;
    }
}

let c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

let d = counter();
console.log(d()); // 1
console.log(d()); // 2



