const user={
    username: "manish",
    price: 999,

    welcomeMessage:function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
//this is used for current context
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()
// console.log(this);

const any = () =>{
    // Arrow Function
    
}

 // const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }

// Implicit return
// const addToo = (num1 , num2)=> (num1 + num2)

//for Objects
const addTo = (num1 , num2)=> ({username: "manish"})

console.log(addTo(4,5));


// console.log(addTwo(5 , 5));
