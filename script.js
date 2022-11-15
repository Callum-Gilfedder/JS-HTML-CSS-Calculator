
var answer_button = document.getElementById("answer");
answer_button.innerHTML = "";

var number_buttons = document.getElementsByClassName("item1");

var operator = "default";
var savedValue = 0;
// loop through and add event listener to each one, each time a button is clicked it reaches for the inner html and 
// appends that value to the answer_button.
operatorsList = ["answer", "+", "x", "-", "AC", "="] 



// need to make sure that . cant be added more than once or at the beginning.

function getInnerHTML() {
    if (this.innerHTML === ".") {
        if (answer_button.innerHTML.includes(".") || answer_button.innerHTML == "") {
            console.log("Already added .")
        } else {
            answer_button.innerHTML = answer_button.innerHTML + this.innerHTML
        }
    }
    if (operatorsList.includes(this.innerHTML)) {
        if (this.innerHTML==="+") {
            savedValue = answer_button.innerHTML
            answer_button.innerHTML = "";
            operator = "+";
            // console.log(operator)
        }
        if (this.innerHTML==="x") {
            savedValue = answer_button.innerHTML
            answer_button.innerHTML = "";
            operator = "x";

        }
        if (this.innerHTML==="-") {
            savedValue = answer_button.innerHTML
            answer_button.innerHTML = "";
            operator = "-";
        }
        if (this.innerHTML==="AC") {
            answer_button.innerHTML = "";
        }
        if (this.innerHTML === "=") {
            if (operator === "+") {
                finalValue = Number(answer_button.innerHTML) + Number(savedValue);
                answer_button.innerHTML = (finalValue);
            }
            if (operator === "-") {
                finalValue = Number(answer_button.innerHTML) - Number(savedValue);
                answer_button.innerHTML = finalValue;

            }
            if (operator === "x") {
                finalValue = Number(answer_button.innerHTML) * Number(savedValue);
                answer_button.innerHTML = finalValue;

            }
            
        }
    } else if (this.innerHTML != ".") {
        answer_button.innerHTML = answer_button.innerHTML + this.innerHTML
    }
    





}



var i = 0;
while (i < number_buttons.length) {
    number_buttons[i].addEventListener("click", getInnerHTML)
    i++
}

// Then we need to select the operation buttons.

