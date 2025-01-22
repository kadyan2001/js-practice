const userEmail = "man@gmail.com"

if (userEmail) {
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

// Falsy values

// false , 0, -0 , BigInt 0n , ""  ,null , undefined, NaN

// truhty values
// true , "0" , 'false' , " " , [] , {} , function(){}

// Check if array and object is empty or not

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

// Nullish coalescing operator (??) : null undefined

let val1;
// val1= 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

console.log(val1)

// ternary operator

// condition ? true :false

const price = 100

price >=80 ? console.log("more than 80") : console.log("less than 80")