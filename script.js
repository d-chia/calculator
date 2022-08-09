//declare variables globally: stores inputs and display value

let firstNum;
let secondNum;
let cache = undefined;
let currentOperation = undefined;
let inputArray = [];
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
    if (b === 0) {
        reset ();
        return alert("Don't break the universe!");
    } else {
        return +a / +b;
    }
}


//operator function takes three arguments
//first number - operation() - second number
//"window" function is necessary to call function with name, not string

function operate(firstNum, calculation, secondNum) {
    return window[calculation](firstNum, secondNum);
}



//display shows displayValue
//function to update display value for easy reuse
//by default or initial load runs function and shows 0 from initial display value

const displayContent = document.querySelector("#displayContent");

function displayUpdate() {
    if (displayValue.toString().length < 15) {
        displayContent.innerText = displayValue;
    } else {
        displayContent.innerText = displayValue.toExponential(4);
    }
}


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


//add event listener for decimal button 

decimal.addEventListener("click", decInput);


//declare function to add decimal point to array
//only executes when array does not include decimal point (prevent multiple points)

function decInput() {
    if (!(inputArray.includes(".")) ) {
        inputArray.push(".");
        displayValue = +inputArray.join("");
        displayUpdate();
    } else {
        return;
    }
};



//add event listener to AC 
//add clear all by emptying and zeroing arrays and inputs

AC.addEventListener("click", reset); 

function reset() {
    cache = undefined;
    currentOperation = undefined;
    inputArray = [];
    displayValue = 0;
    displayUpdate();
};


//add event listener to operation buttons
//operation button switches current Operation variable to matching operation
//also moves current input array to cache as number
//clears input array

addition.addEventListener("click", () => {
        if (cache === undefined) {
            currentOperation = "add";
            cache = +inputArray.join("");
            inputArray = [];
        } else {
            getResult();
            displayValue = cache;
            displayUpdate();
            currentOperation = "add";
            inputArray = [];
        }
    }
);

subtraction.addEventListener("click", () => {
        if (cache === undefined) {
            currentOperation = "subtract";
            cache = +inputArray.join("");
            inputArray = [];
        } else {
            getResult();
            displayValue = cache;
            displayUpdate();
            currentOperation = "subtract";
            inputArray = [];
        }
    }
);

multiplication.addEventListener("click", () => {
        if (cache === undefined) {
            currentOperation = "multiply";
            cache = +inputArray.join("");
            inputArray = [];
        } else {
            getResult();
            displayValue = cache;
            displayUpdate();
            currentOperation = "multiply";
            inputArray = [];
        }
    }
);

division.addEventListener("click", () => {
        if (cache === undefined) {
            currentOperation = "divide";
            cache = +inputArray.join("");
            inputArray = [];
        } else {
            getResult();
            displayValue = cache;
            displayUpdate();
            currentOperation = "divide";
            inputArray = [];
        }
    }
);


//add event listener to equals button
//equals button runs operation with number in cache, current operation, and current input array
//shows result in display

equals.addEventListener("click", () => {
        getResult();
        displayValue = cache;
        inputArray = [];
        displayUpdate();
    }
);


//declare function to calculate with number in cache, current operation, and current input array

function getResult() {
    let x = +inputArray.join("");
    let result = operate(cache, currentOperation, x);
    let resultRounded = ((Math.round(result*100000000))/100000000);
    cache = resultRounded;
}


//add keydown event listener for backspace
//declare function to delete last input in input array

window.addEventListener("keydown", deleteLast);

function deleteLast(e) {
    if (e.keyCode == "8") {
        inputArray.pop();
        displayValue = +inputArray.join("");
        displayUpdate();
    }
}






//notes:
//when press operation --> store whatever is in array in cache --> empty input array  --> fill input array again (default 0?) --> operation or equals puts number in cache again --> display cache as result
//continuation: refactor calculation of result in own function --> call function when cache is not empty OR: if currentOperation != default --> store result in cache --> continue normal
//for keyboard input: addEvent Listener for keydown on button id --> trigger buttons
//limit space or length for numbers in display
//add functionality to decimal point button
//add rounding of results to specific decimals