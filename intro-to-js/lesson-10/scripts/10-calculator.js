let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.js-calculation').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}

function clearCalculation() {
  localStorage.removeItem('calculation');
  calculation = '';
  document.querySelector('.js-calculation').innerHTML = '';
}

function calculate() {
  calculation = eval(calculation)
  document.querySelector('.js-calculation').innerHTML = calculation;
}