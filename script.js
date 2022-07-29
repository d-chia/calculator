//declare variables globally: stores inputs and display value

let firstNum = 0;
let secondNum;
let cache = 0;
let displayValue = 0;


//declare variables globally: buttons as js elements

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");

const AC = document.querySelector("#AC");
const equals = document.querySelector("#equals");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");


//calculation functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


//operator function takes three arguments
//first number - operation() - second number

function operate(firstNum, calculation, secondNum) {
    return calculation(firstNum, secondNum);
}



//display shows displayValue

const displayContent = document.querySelector("#displayContent");

displayContent.innerText = displayValue;





//pressing equal updates displayValue




//if button that is not calculation (=number button) is pressed
//while result is displayed (somehow connected to cache?)
//reset and start with new input