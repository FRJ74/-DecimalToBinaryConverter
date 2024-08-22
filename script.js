/* Create a function that will count down from a given number to zero using recursion */ 

const countDownAndUp=(number) => {
    console.log(number);
    if (number === 0) {
        return;
      } else {
        countDownAndUp(number - 1);
      }
}; 

/* Get input from html elements */
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    let binary ="";
    
    if (input === 0) {
        binary = "0";
      }

    while (input > 0) {
       binary = (input % 2) + binary;
       input = Math.floor(input / 2);
    }
 
    result.innerText = binary;

};

/* Create a funtion to check the value in the number input element whenever the user clicks the Convert button. */
const checkUserInput = () => {
    if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

/* Add event listener to the function */
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" ) {
        checkUserInput();
    };
} );