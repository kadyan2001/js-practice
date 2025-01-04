const name = "manish"
const age = "23"

// console.log(name + age + "value");

console.log(`Hello my name is ${name} and my age is ${age}`);

// to declare string

const gameName= new String('manish')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8,4)

// to remove unnecessary space
const newStringone="    Manish    "
console.log(newStringone.trim());

const url= "https://manish.com/manish%20kadyan"

console.log( url.replace('%20','-'));

console.log(url.includes('manish'));







