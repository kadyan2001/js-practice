// if

const isLoggedin = true

if(true){

}

if(2 === "2"){
    console.log("executed");
}

// < , > , <= , >= , != , == , ===(also check the data type)

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// // error of scope
// console.log(`User power: ${power}`)

// for nesting we use if - else-if


const userLoggedin = true
const debitcard = true
const loggedInfromGoogle = true
const loggedInfromEmail = true

if (userLoggedin && debitcard) {
    console.log("Allow user to buy")
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("user logged in")
}