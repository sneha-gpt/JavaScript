//--------IIFE (Immediate Invoked Function Expression)-------------------

function chai(){

}

chai();

// IIFE to remove pollution in global scope
(function chai(){

})();

(function a(){

})(); // (;) Invoked but dont know where to end 

((name) => {
  console.log(name);
})("Sneha")