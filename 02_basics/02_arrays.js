const a = [1, 2, 3];
const b = [4, 5, 6];

// a.push(b);
// console.log(a);

const c = a.concat(b);
console.log(c);

//-------------------------Spread Operator---------------
const d = [...a, ...b, ...c];
console.log(d);

console.log(Array.isArray("Sneha"));
//------------------To convert into array ['S', 'n', ....]-------------
console.log(Array.from("Sneha"));

console.log(Object.keys({"name":"Sneha"}));
console.log(Object.values({"name":"Sneha"}));
console.log(Object.entries({"name":"Sneha"}));
