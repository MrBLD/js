// Dates

let myDate = new Date()
console.log(1, myDate.toString());
console.log(2, myDate.toDateString());
console.log(3, myDate.toLocaleString());
console.log(4, myDate.toLocaleDateString());
console.log(5, myDate.toISOString());
console.log(6, myDate.toTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // months start with 0 in js
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})