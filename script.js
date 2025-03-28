/* function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate() {

}
*/

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    let char = button.textContent;
    button.addEventListener("click", () => {
        console.log(`the ${char} button was clicked`);
    })
});