//declare variables globally: stores inputs and display value

let firstNum;
let secondNum;
let cache = undefined;
let currentOperation = "default";
let inputArray = [0];
let displayValue = 0;


//declare variables globally: buttons as js elements

const numButtons = document.querySelectorAll(".numButtons")
const decimal = document.querySelector("#decimal");

const AC = document.querySelector("#AC");
const equals = document.querySelector("#equals");

const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");


//calculation functions

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if (b == 0) {
        reset ();
        return alert("Don't break the universe!");
    } else {
        return +a / +b;
    }
}


//operator function takes three arguments
//first number - operation() - second number
//window function is necessary to call function with name, not string

function operate(firstNum, calculation, secondNum) {
    return window[calculation](firstNum, secondNum);
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

AC.addEventListener("click", reset); 

function reset() {
    cache = undefined;
    inputArray = [];
    displayValue = 0;
    displayUpdate();
};



//add event listener to operation buttons
//operation button switches current Operation variable to matching operation
//also moves current input array to cache as number
//clears input array


addition.addEventListener("click", () => {
        currentOperation = "add";
        cache = +inputArray.join("");
        inputArray = [0];
    }
);

subtraction.addEventListener("click", () => {
        currentOperation = "subtract";
        cache = +inputArray.join("");
        inputArray = [0];
    }
);

multiplication.addEventListener("click", () => {
        currentOperation = "multiply";
        cache = +inputArray.join("");
        inputArray = [0];
    }
);

division.addEventListener("click", () => {
        currentOperation = "divide";
        cache = +inputArray.join("");
        inputArray = [0];
    }
);



//add event listener to equals button
//equals button runs operation with number in cache, current operation, and current input array
//shows result in display

equals.addEventListener("click", () => {
        getResult();
        displayValue = cache;
        inputArray = [0];
        displayUpdate();
    }
);


//declare function to calculate with number in cache, current operation, and current input array

function getResult() {
    let x = +inputArray.join("");
    let result = operate(cache, currentOperation, x);
    cache = result;
}


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


//when press operation --> store whatever is in array in cache --> empty input array  --> fill input array again (default 0?) --> operation or equals puts number in cache again --> display cache as result


//continuation: refactor calculation of result in own function --> call function when cache is not empty OR: if currentOperation != default --> store result in cache --> continue normal