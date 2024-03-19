// goal to make the button operate as stated

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(body);

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target)
    body.style.backgroundColor = e.target.id;
  });
});
