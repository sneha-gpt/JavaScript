let arr = new Array(3, 4, 9, 1);
arr.forEach((i) => {
    console.log(i);
})

let arr2 = [1, true, 3, 5];
console.log(arr2);
console.log(arr2[1]); // access
console.log(arr2[8]); //undefined

arr2[8] = 45; // modify
console.log(arr2[8]);

// reverse
arr.reverse();
console.log(arr);

let arr3 = arr.sort(function(a, b){
    return a - b;
})

console.log(arr3);

let arr4 = arr.sort(function(a, b){
    return b - a;
})

console.log(arr4);

// forEach
arr4.forEach(function(val){
    console.log(val);
})

arr4[7] = "Hello";

// map
let arr5 = arr4.map(function(val){
    return val + 5;
})

console.log(arr5);

// filter

let a = [1, 2, 3, 4, 5, 6, 7, 8];
let new_a = a.filter(function(val){
    if(val%2 === 0)
        return true;
    return false;
})

console.log(new_a);

// Reduce 

a[0] = 0;
let sum = a.reduce(function(accumulator, val){
    return accumulator + val;
});

console.log(sum);

// find 

let b = [10, 20, 30, 40, 11];
let ans = b.find(function(val){
    return val > 10;
})

console.log(ans);

// some

ans = b.some(function(val){
    return val%2 === 0;
})

console.log(ans);

// every 

ans = b.every(function(val){
    return val%2 === 0;
})

console.log(ans);

// Destructuring 
let x = [1, 2, 3, 4, 5, 6];
let [k, l, , m] = x;

console.log(k);
console.log(l);
console.log(m);

// Spread Operator 

let y = [...x];
console.log(y);

y[0] = 10;
console.log(y[0]);
console.log(x[0]);

// Add "India" to the start of this array using spread

let countries = ["USA", "UK"];
countries = ["India", ...countries];

console.log(countries);


