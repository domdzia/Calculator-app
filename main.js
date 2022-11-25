const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number")
const clearButton = document.querySelector(".clear")
const previousNumber = document.querySelector(".previous-number")
const currentNumber = document.querySelector(".current-number")
const operatorElement = document.querySelector(".operator-elem")
const equalResult = document.querySelector(".equal");
let result;
let flag = false; 


// Function with choosing numbers to action 
numbers.forEach(num => num.addEventListener("click", chooseNumbers => {
if(num.innerHTML === "." && currentNumber.innerHTML.includes(".")) return;
if(num.innerHTML === "." && currentNumber.innerHTML === ""){
    currentNumber.innerHTML = "0"
}
currentNumber.innerHTML += num.innerHTML
}))



// Function to choose operator to action 
operators.forEach(operator => operator.addEventListener("click", chooseSign => {
    if(currentNumber.innerHTML === "") return;
    operatorElement.innerHTML = operator.innerHTML;
    flag = !flag
    if(flag){
        previousNumber.innerHTML = currentNumber.innerHTML
        currentNumber.innerHTML = ""
        flag = !flag
    }
}))

//Function which doing operation 
equalResult.addEventListener("click", showResult => {
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let mathSign = operatorElement.innerHTML
    if(mathSign === '+'){
        result = a + b;
        currentNumber.innerHTML = result.toFixed(2);
        if(result.toFixed(2) === `${result}.00`){
            currentNumber.innerHTML = result;
        }
        previousNumber.innerHTML = "";
        operatorElement.innerHTML = "";
    } else if(mathSign === '-'){
        result = b - a;
        currentNumber.innerHTML = result.toFixed(2);
        if(result.toFixed(2) === `${result}.00`){
            currentNumber.innerHTML = result;
        }
        previousNumber.innerHTML = "";
        operatorElement.innerHTML = "";

    } else if(mathSign === "x"){
        result = a * b;
        currentNumber.innerHTML = result.toFixed(2);
        if(result.toFixed(2) === `${result}.00`){
            currentNumber.innerHTML = result;
        }
        previousNumber.innerHTML = "";
        operatorElement.innerHTML = "";
    } else if(mathSign === ":"){
        result = b / a;
        currentNumber.innerHTML = result.toFixed(2);
        if(result.toFixed(2) === `${result}.00`){
            currentNumber.innerHTML = result;
        }
        previousNumber.innerHTML = "";
        operatorElement.innerHTML = "";
    } else if(mathSign === "**2"){
        result = Math.pow(b, a);
        currentNumber.innerHTML = result.toFixed(2);
        if(result.toFixed(2) === `${result}.00`){
            currentNumber.innerHTML = result;
        }
        previousNumber.innerHTML = "";
        operatorElement.innerHTML = "";
    }

})

// Function to delete result 
clearButton.addEventListener("click", deleteAction => {
    previousNumber.innerHTML = "";
    operatorElement.innerHTML = "";
    currentNumber.innerHTML = "";
    result = 0;
})


































// Choose the number to calculate element

// numbers.forEach(num => num.addEventListener("click", (e) => {
// // Create div and give this to currentNumber - You have to also add block to adding dot when is more than one, you can add only one dot to number 
//     let listNum = document.createElement("div");
//     listNum.textContent = num.textContent
//     currentNumber.appendChild(listNum);
//     console.log(Boolean(operatorElement))
// }))

// // Choose operator to count elements

// operators.forEach(operator => operator.addEventListener("click", () => {
// if(currentNumber.textContent === ""){
//     return;
// } 
// operatorElement.textContent = operator.textContent
// // Change boolean to true when its false 
// if(operator.textContent === "="){
//     currentNumber.textContent = Number(currentNumber.textContent) + Number(previousNumber.textContent)
//     previousNumber.textContent = ""
//     operatorElement.textContent = ""
// }
// if(operatorElement.textContent){
//     previousNumber.textContent = currentNumber.textContent;
//     currentNumber.textContent = "";
//     operatorElement = !operatorElement
// } 

// console.log(Boolean(operatorElement))
// }))







