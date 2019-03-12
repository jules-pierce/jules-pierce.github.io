/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

let count = 0;
const countDisplay = document.querySelector('.numberLabel');
const addButton = document.querySelector('#addButton');


const resetButton = document.querySelector('#resetButton');

function increment(){
  count++;
  countDisplay.textContent = "Number: " + count;
}

function reset(){
  count = 0;
  countDisplay.textContent = "Number: 0";
}

resetButton.addEventListener('click', reset);

addButton.addEventListener('click', increment);
