function sayMyname(){

}

// sayMyname()

// function addTwonumber(num1 , num2){ //parameters
//     console.log(num1 + num2);
// }

function addTwonumber(num1 , num2){ //parameters
    // let result = num1 + num2 
    // return result 
    
    return num1 + num2
}

const result = addTwonumber(3,6)
// console.log("Result:"  ,result);


addTwonumber(3,4) //arguments

function loginUsermessage (username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("mahi"));
console.log(loginUsermessage("mahi"))


// for infinite number of arguments
// rest operator (...)
function calculatecartPrice(val1 , val2, ...num1){
    return num1
}

console.log(calculatecartPrice(200,400,600,800));

const user = {
    name:"manish",
    age: 23
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    
}

// handleObject(user)
 handleObject({
    username: "Manish",
    age: 23
  })

const mynewArray = [200, 100, 2000,33]

function returnSecondvlaue(getArray){
    return getArray[1]
}

console.log(returnSecondvlaue(mynewArray));
