/* Create a function that will count down from a given number to zero using recursion */ 

const countDownAndUp=(number) => {
    console.log(number);
    if (number === 0) {
        console.log("Reached base case");
        return;
      } else {
        countDownAndUp(number - 1);
        console.log(number);
      }
}; 

/* Get input from html elements */
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    if (input === 0) {
        return "";
      }
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