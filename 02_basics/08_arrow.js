const chai = function(){

}

const chai_arrow = () => {

}

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(4, 5));

//--------------------------Implicit Return------------------------

const add1 = (n1, n2) => n1 + n2;
const add2 = (n1, n2) => (n1 + n2);

//------------------------Explicit Return-----------------
const add3 = (n1, n2) => {return n1 + n2};

console.log(add1(3, 4));
console.log(add2(4, 5));
console.log(add3(1, 2));





