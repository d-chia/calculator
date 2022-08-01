//declare variables globally: stores inputs and display value

let firstNum;
let secondNum;
let cache;
let inputArray = [];
let displayValue = 0;


//declare variables globally: buttons as js elements

const numButtons = document.querySelectorAll(".numButtons")

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
//function to update display value for easy reuse
//by default or initial load runs function and shows 0 from initial display value

const displayContent = document.querySelector("#displayContent");

function displayUpdate() {
    displayContent.innerText = displayValue};

displayUpdate();


//add event listeners for number buttons

numButtons.forEach(number => number.addEventListener("click", numInput));


//declare function to push value of button into inputArray;
//event e when used with event listener is click of button
//update display value to show correct number

function numInput(e) {
    inputArray.push(+e.srcElement.innerText);
    displayValue = +inputArray.join("");
    displayUpdate();
};



//add event listener to AC 
//add clear all by emptying and zeroing arrays and inputs

AC.addEventListener("click", () => {
    cache = 0;
    inputArray = [];
    displayValue = 0;
    displayUpdate();
    }
)







//notes, ideas:
//user input numbers are stored in cache array
//array transformed into int and stored in firstNum at every input
//when button for calculation is pressed, mode is toggled or stored

//declare variable for modes that are called in operator
// let mode = inputMode;

//also initiates input into second array (not in default input mode)
//array transformed into int and stored in secondNum at every input
//pressing equal runs operate function with all three parameters
//pressing equal updates displayValue = result




//if button that is not calculation (=number button) is pressed
//while result is displayed (somehow connected to cache?)
//reset and start with new input


//when press oepration --> store whatever is in array in cache --> empty input array  --> fill input array again (default 0?) --> operation or equals puts number in cache again --> display cache as result