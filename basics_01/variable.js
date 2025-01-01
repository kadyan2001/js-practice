const accountId = 144556
let accountEmail = "man@google.com"
var accountPassword = "123456"
accountCity = "Hisar"

let accountState;

// accountId = 2 cannot be changed

accountEmail = "hc@hc.com"
accountPassword = "212211221"
accountCity = "gurugram"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([ accountId , accountEmail , accountPassword,accountCity ,accountState])
