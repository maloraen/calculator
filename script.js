let evaluatedWithEquals = false;
let evaluatedWithOperator = false;

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    return parseFloat(x) / parseFloat(y);
}

function modulo(x, y) {
    return parseFloat(x) % parseFloat(y);
}

let firstNum = 0;
function updateFirstNum(x) {
    (firstNum === 0 || firstNum === "") ? firstNum = x : firstNum = `${firstNum}${x}`;
    updateDisplay(firstNum, "", "");
}

let secondNum = 0;
function updateSecondNum(y) {
    (secondNum === 0 || secondNum === "") ? secondNum = y : secondNum = `${secondNum}${y}`;
    updateDisplay (firstNum, secondNum, operator);
}

let operator = "";
function updateOperator(op) {
    operator = op;
    updateDisplay(firstNum, "", op);
}

function operate(op) {
    let result = "";
    if (op == "+") {
        result = add(firstNum, secondNum);
    }
    if (op == "-") {
        result = subtract(firstNum, secondNum);
    }
    if (op == "*") {
        result = multiply(firstNum, secondNum);
    }
    if (op == "/") {
        if (firstNum == 0 || secondNum == 0) {
            result = "snarky message";
        } else {
            result = divide(firstNum, secondNum);
        }
    }
    if (op == "%") {
        result = modulo(firstNum, secondNum);
    }
    if (typeof result === "number" && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(5));
    }
    
    display.textContent = result;
    display.classList.add("result");
        
    if (display.classList.contains("result")) {
        firstNum = result;
        secondNum= "";
        operator = "";
        display.classList.remove("result");
    }
}

const display = document.querySelector(".display span");
function updateDisplay(x, y, op) {
    if (x < 0) x = `(${x})`;
    if (y < 0) y = `(${y})`;
    display.textContent = `${x}${op}${y}`;
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
        if (evaluatedWithEquals) {
            firstNum = digit;
            secondNum = "";
            operator = "";
            evaluatedWithEquals = false;
            updateDisplay(firstNum, "", "");
        } else if (evaluatedWithOperator) {
            secondNum = digit;
            evaluatedWithOperator = false;
            updateDisplay(firstNum, secondNum, operator);
        } else {
            operator == "" ? updateFirstNum(digit) : updateSecondNum(digit);
        }
    })
})

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    if (evaluatedWithEquals) {
        firstNum = "0.";
        secondNum = "";
        operator = "";
        evaluatedWithEquals = false;
        evaluatedWithOperator = false;
        updateDisplay(firstNum, "", "")
        return;
    }
    if (evaluatedWithOperator) evaluatedWithOperator = false;

    if (display.textContent == 0 && firstNum == "") {
        updateFirstNum("0.")
    }
    if (operator == ""){
        if (firstNum === 0) {
            updateFirstNum(".");
        }
        if (!String(firstNum).includes(".")) updateFirstNum(".");
    } else {
        if (!String(secondNum).includes(".")) {
            if (secondNum == "") {
                updateSecondNum("0.");
            } else {
                updateSecondNum(".");
            }
        }
    }
    console.log("firstNum:", firstNum);
    console.log("operator:", operator);
    console.log("secondNum:", secondNum);
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
        if (display.textContent == 0) {
            firstNum = 0;
        }
        if (secondNum == "") {
            updateOperator(char)
            evaluatedWithEquals = false;
            evaluatedWithOperator = false;
        } else {
            operate(operator);
            updateOperator(char);
            evaluatedWithEquals = false;
            evaluatedWithOperator = true;
        }
    })
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    display.textContent = 0;
})

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
    if (operator && secondNum != null && secondNum != "") {
        operate(operator);
        evaluatedWithEquals = true;
        evaluatedWithOperator = false;
    }
})