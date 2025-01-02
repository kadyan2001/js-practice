//  #primitive datatype
// 7 types: String ,  Number , Boolean, BigInt , Symbol , undefined , null

const score=100
const scoreValue=100.3


const isLoggedIn=false
let userEmail;
const id= Symbol('123')
const anoterId= Symbol('123')

console.log(id === anoterId);



// refrence type(non-primitive)
// Array , Object , Functions

const heros = ["shaktiman" , "naagraj"]

let obj = {
    name : "manish",
    age : 23
}

const myFunction = function(){
    console.log("Hello World");
    
}