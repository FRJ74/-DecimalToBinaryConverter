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
    if (input === 0 || input === 1) {
        return String(input);
      } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
       }
};

const showAnimation = () => {
    setTimeout(() => {
        console.log("free");
      }, 500);
       
    setTimeout(() => {
        console.log("Code");
      }, 1000);
      
      setTimeout(() =>  {
        console.log("Camp");
      }, 1500);
    };

    


/* Create a funtion to check the value in the number input element whenever the user clicks the Convert button. */
const checkUserInput = () => {

    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || 
        isNaN(inputInt) ||
        inputInt < 0) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
};

/* Add event listener to the function */
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" ) {
        checkUserInput();
    };
} );