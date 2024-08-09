/* Get input from html elements */
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/* Create a funtion to check the value in the number input element whenever the user clicks the Convert button. */
const checkUserInput = () => {
    if (!numberInput.value || parseInt(numberInput.value)) {

    }
};

/* Add event listener to the function */
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" ) {
        checkUserInput();
    };
} );