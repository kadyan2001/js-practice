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
