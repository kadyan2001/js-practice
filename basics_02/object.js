// Singleton
// Object.create()

// Object literals

const mySym= Symbol("Key1")

const Jsuser={
    name:"Manish",
    "full name": "Manish Kadyan",
    [mySym]: "mykey1",
    age: 23,
    location: "ftb",
    email: "manksh@google.com",
    isLoggedIn: false,
     lastLoginDays: ["Monday", "Saturday" ] 
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]); 

Jsuser.email = "man@chatgpt.com"
// Object.freeze(Jsuser)  //for not to change the object values

Jsuser.greetings = function () {
    console.log("Hello");
}
Jsuser.greetingsTwo = function () {
    console.log(`Hello ${this.name}`);
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());





