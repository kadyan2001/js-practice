// Immediately Invoked Function Expression
// kyi baar global scope ke pollution se problem hoti hai kyi baar toh usko resolve krne ke liye iife ka use kiya jaata hai
(function cha () {
    console.log(`DB Connected`);
    
})();

( (name) =>{
    console.log(`DB connected ${name}`);
    
})("maish");