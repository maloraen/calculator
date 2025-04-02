const display = document.querySelector(".display");
let firstNum = 0;
let secondNum = 0;
let operator = "";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function modulo(x, y) {
    return x % y;
}

function updateFirstNum(x) {
    firstNum == 0 ? firstNum = x : firstNum = `${firstNum}${x}`;
    updateDisplay(firstNum, "", "");
}

function updateSecondNum(y) {
    secondNum == 0 ? secondNum = y : secondNum = `${secondNum}${y}`;
    updateDisplay (firstNum, secondNum, operator);
}

function updateOperator(op) {
    operator = op;
    updateDisplay(firstNum, "", op);
}

function updateDisplay(x, y, op) {
    if (x < 0) x = `(${x})`;
    if (y < 0) y = `(${y})`;
    display.textContent = `${x}${op}${y}`;
}

function operate(x, y, op) {

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
    })
})

const numBtn = document.querySelectorAll(".number");
numBtn.forEach((button) => {
    let digit = button.textContent;
    button.addEventListener("click", () => {
        operator == "" ? updateFirstNum(digit) : updateSecondNum(digit);
    })
})

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    if (operator == ""){
        if (!String(firstNum).includes(".")) updateFirstNum(".");
    } else {
        if (!String(secondNum).includes(".")) updateSecondNum(".");
    } 
})

const integerBtn = document.querySelector(".integer");
integerBtn.addEventListener("click", () => {
    if (operator == "") {
        firstNum > 0 ? firstNum -= (firstNum * 2) : firstNum -= (firstNum * 2);       
        updateDisplay(firstNum, "", "") 
    } else {
        secondNum > 0 ? secondNum -= (secondNum * 2) : secondNum -= (secondNum * 2);       
        updateDisplay(firstNum, secondNum, operator) 
    }
})

const operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach((button) => {
    let char = button.textContent;
    button.addEventListener("click", () => {
        if (secondNum == "") updateOperator(char);
    })
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.textContent = 0;
})

