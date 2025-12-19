const myArr = [0, 1, true, "hello"];
console.log(myArr);

myArr.push(5);
console.log(myArr);

myArr.pop();
console.log(myArr);


// --------------------------Shift all elements----------------------
myArr.unshift(0);
console.log(myArr);

myArr.shift();
console.log(myArr);

//--------------------------Check-----------------------------
console.log(myArr.includes(7));
console.log(myArr.indexOf(true));

//------Add all the elements of an array into a string, separated by the specific separator-------
new_arr = myArr.join();
console.log(new_arr);


//---------------Slice Splice-------------------
const myArr2 = [10, 40, 50];
console.log(myArr2.slice(1, 2));
myArr2.splice(1, 2, 99, 100);
console.log(myArr2);








