const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums0 = myNumbers.map((num) => {
  return num + 10;
});

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

const negpi = myNumbers
  .map((num) => num * -1 * Math.PI)
  .map((num) => num + 15)
  .filter((num) => {return num > 0});


// console.log(newNums0);
// console.log(newNums);
console.log(negpi);