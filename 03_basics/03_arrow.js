const user = {
    username: "Bhaskar",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // prints about the parent object
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node is empty but in windows(browser)->outputs properties of global "windows" #test

function Test(){
    console.log(this); // outputs function global properties
}
function Test1(){
    let username = "Bhaskar1"
    console.log(this); // undefined as global fn doesnt have username properties
}
const Test2 = function () {
    let username = "Bhaskar2"
    console.log(this.username); //undefined
}
const Test3 =  () => {
    let username = "Bhaskar3"
    console.log(this); // empty scope properties
    console.log(this.username); // undefined
}

// Test1()
// Test2()
// Test3()

const addTwov1 = (num1, num2) => { return num1 + num2 }
const addTwov2 = (num1, num2) =>  num1 + num2
const addTwov3 = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "Bhaskar"})

console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {}) //
// myArray.forEach(() =>{}) //
// function printElement(element) {
//     console.log(element);
// }