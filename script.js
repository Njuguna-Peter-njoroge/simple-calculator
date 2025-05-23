
const resultDisplay = document.getElementById('resultDisplay');
const historyDisplay = document.getElementById('historyDisplay');
const num1Input = document.getElementById('num1Input');
const num2Input = document.getElementById('num2Input');
const operationButtons = document.querySelectorAll('.operation-btn');

const clearButton = document.getElementById('clearBtn');

let currentResult = 0; 


 
function clearCalculator() {
    currentResult = 0; 
    num1Input.value = ''; 
    num2Input.value = ''; 
    historyDisplay.textContent = ''; 
    resultDisplay.textContent = currentResult; 
}



function getNumbers() {
    const val1 = parseFloat(num1Input.value); 
    const val2 = parseFloat(num2Input.value);

    if (isNaN(val1) || isNaN(val2)) {
        alert('Please enter valid numbers in both fields.');
        return null; 
    }
    return { val1, val2 }; 
}



 
function performOperation(operator) {
    
}
    const numbers = getNumbers(); 
    if (!numbers) {
      
        return;
    }

    const { val1, val2 } = numbers; 
    let result; 

  
    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case 'x':
            result = val1 * val2;
            break;
        case '÷': 
            if (val2 === 0) {
                alert('Cannot divide by zero!');
                clearCalculator(); 
                return;
            }
            result = val1 / val2;
            break;
        default:
            alert('Invalid operation!');
            return;
    }

  
    currentResult = result;
    historyDisplay.textContent = `${val1} ${operator} ${val2} = ${result}`; 
    resultDisplay.textContent = currentResult; 

document.addEventListener('DOMContentLoaded', () => {
 
    clearCalculator();


    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            performOperation(button.textContent);
        });
    });


    clearButton.addEventListener('click', clearCalculator);
})