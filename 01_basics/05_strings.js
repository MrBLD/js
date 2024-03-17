const name = "KingBen"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(1,`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ben-bld-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(2,gameName.charAt(2));
console.log(3,gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(4,newString);

const anotherString = gameName.slice(-9, 4)
console.log(5,anotherString);

const newStringOne = "   KingBen    "
console.log(6,newStringOne);
console.log(7,newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(8,url.replace('%20', '-'))

console.log(9,url.includes('sundar'))

console.log(10,gameName.split('-'));