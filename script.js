/* function add(x, y) {

}

function subtract(x, y) {

}

function multiply(x, y) {

}

function divide(x, y) {

}

function operate() {
    
}
*/

const display = document.querySelector(".display span");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    let char = button.textContent;
    button.addEventListener("click", () => {
        console.log(`${char}`);
        if (button.classList.contains("number") || button.classList.contains("decimal")) {
            console.log(`a ${button.classList.contains("number") ? "number" : "decimal"} button was clicked`);
            if (display.textContent == 0) {
                display.textContent = char;
            } else if (display.classList.contains("result")) {
                display.classList.remove("result");
                display.textContent = char;
            }
            else {
                display.textContent += char;
            }
        }
        if (button.classList.contains("operator")) {
            console.log("an operator button was clicked");
            display.textContent += char;
            if (display.classList.contains("result")) {
                display.classList.remove("result");
            }
        }
        if (button.classList.contains("equals")) {
            console.log("the equals button was clicked");
            let result = math.evaluate(display.textContent);
            console.log(`result: ${result}`)
            display.classList.add("result");
            display.textContent = result;
        }
        if (button.classList.contains("clear")) {
            display.textContent = "0";
        }
    })
});


// when number button clicked, update display to show number
// when opertor button clicked, update display to show number and operator
// when another button clicked, update display to show number operator number
// when equals button clicked, run calculation, update display to show result (and last operation above it ?)
  // if another number is clicked, clear result, go back to step 1
  // if another operator is clicked, show operator after result (and clear last operation), go back to step 3
