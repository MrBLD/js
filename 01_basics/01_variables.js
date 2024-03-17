const accountId= 12345
let email="bhaskar.ece.21@gmail.com"
var accountPass = "1335555"
accountCity="Patna"
let accountState;

/*
prefer not to use var 
because of issue in block scope
*/

// accountId= 123456
email="bhaskar.ece.23@gmail.com"
accountPass = "13355556"
accountCity="Patna"

console.log([accountId, accountPass, accountCity]);