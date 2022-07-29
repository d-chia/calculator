//declare variables globally
let cache = 0;

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

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}


//operator function takes three arguments
//first number - operation - second number

function operate(a, calculation, b) {
    return calculation(a, b);
}










//pressing equal displays cache