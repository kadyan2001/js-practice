// array

const myArr = [0,1,4,6,7]

const myArr2 = new Array(1,4,6,7,9)

// console.log(myArr[2]);

// Array methods
// myArr.push(6)
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()

// console.log( myArr.includes(9)
// );

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// Slice , Splice
console.log("A" , myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B" , myArr);

const myn2= myArr.splice(1,3)
// splice manipulates the original array
console.log("C" , myArr);
 
console.log(myn2);



