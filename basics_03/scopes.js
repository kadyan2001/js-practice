let a= 30

if (true){
    let a=10
    const b=20
    var c=30   //var is not suitable 
    // console.log("Inner:", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c); 

function one(){
    const username= "manish"

    function two(){
        const website= "aabsv"
        // console.log(username);
        
    }
    // console.log(website);
    
    two()
}
// one()

if(true){
    const username="manish"
    if(username === "manish"){
        const website= " skve"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// *************intersting************
addone(5)
console.log(addone(5));
function addone(num){
    return num+1
}

// addtwo(5)  it is hoisting that we cannot use before its decleration
const addtwo= function(num){
    return num+2
}
// console.log( addtwo(5));
