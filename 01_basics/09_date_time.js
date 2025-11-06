let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getDate());

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString());
console.log(`My created date is ${myCreatedDate.toLocaleString()}
Day: ${myCreatedDate.getDay()}, Month: ${myCreatedDate.toLocaleString('default', {
    month: "long"
})}`);

// console.log(Date.now());

myCreatedDate.toLocaleString('default', {
    month: "long"
})