let display = document.getElementById('display');
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    display.value += number;
}

function setOperator(op) {
    operator = op;
    operand1 = display.value;
    display.value = '';
}

function calculate() {
    operand2 = display.value;
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}
