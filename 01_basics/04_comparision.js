// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// avoid these type of comparisions
console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
/* 
the reason for not predictable result is equality == and comparisions > < >= <= work differently
comparisions convert nusll t a number, treating it as 0
*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === // checks datatype also| doesnt do conversions

console.log("2" === 2);