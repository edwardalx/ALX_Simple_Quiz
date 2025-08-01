
const result = document.getElementById('calculation-result');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

add = () => {   
const input1 = document.getElementById('number1').value;
const input2 = document.getElementById('number2').value;
const number1 = parseFloat(input1);
const number2 = parseFloat(input2); 
const answer = number1 + number2;

    result.textContent = `${answer}`;
    return;
}

subtract = () => {
const input1 = document.getElementById('number1').value;
const input2 = document.getElementById('number2').value;
const number1 = parseFloat(input1);
const number2 = parseFloat(input2); 
const answer = number1 - number2;  
  return  result.textContent = answer;
}
multiply = () => {
const input1 = document.getElementById('number1').value;
const input2 = document.getElementById('number2').value;
const number1 = parseFloat(input1);
const number2 = parseFloat(input2); 
const answer =  number1 * number2;
 return result.textContent = answer;
}
divide = () => {
const input1 = document.getElementById('number1').value;
const input2 = document.getElementById('number2').value;
const number1 = parseFloat(input1);
const number2 = parseFloat(input2); 
const answer = number1 / number2;
    if (number2 !== 0) {
       return result.textContent = answer;
    } else {
      return  result.textContent = 'Cannot divide by zero';
    }
}
addButton.addEventListener('click', function() {
   return add();
});
subtractButton.addEventListener('click', function() {
   return subtract();
});
multiplyButton.addEventListener('click', function() {
   return multiply();
});
divideButton.addEventListener('click', function() {
   return divide();
});
