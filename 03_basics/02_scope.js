var c = 300;
let a = 300;

if (true) {
  let a = 10;
  // a=50
  const b = 20; // only defined in scope
  // var c=30 // var is always of global scope
  c = 30;
  console.log("INNER: ", a);
}

console.log("Global:", a);
// console.log(b);
console.log(c);


// global scope is different in windows and in node::DOM
// small can take ice cream from big but big cant from small
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}


// hoisting
//  in addtwo, addtwo is declared and holded in a variable
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
