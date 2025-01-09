// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1342aaf"
tinderUser.name = "Manish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "man@gmail.com",

    fullname : {
        userFullname:{
            firstname: "Mansih",
            lastname : "Kadyan"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)

const obj3= {...obj1 , ...obj2}
// console.log(obj3);

const users=[
    {
        id: 1,
        email : "user@gmail.com"
    },
    {
        id: 1,
      
        email : "user@gmail.com"
    }

]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "afb"

}

// course.courseInstructor
// Object destructiring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor); //destructuring

// Api is just a simple object in the form of json format
// like this syntax for json file
// {
//     "name": "manish",
//     "fullname": "Manish Kadyan",
//     "nickname": "bbvev"

// }

// api also is in array format
[
    {},
    {},
    {}
]