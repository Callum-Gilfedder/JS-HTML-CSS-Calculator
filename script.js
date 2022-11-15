
var answer_button = document.getElementById("answer");
answer_button.innerHTML = "";

var number_buttons = document.getElementsByClassName("item1");
console.log(number_buttons)

// loop through and add event listener to each one, each time a button is clicked it reaches for the inner html and 
// appends that value to the answer_button.
operatorsList = ["answer", "+", "x", "-", "AC", "="] 

if (operatorsList.includes("+")) {
}

// need to make sure that . cant be added more than once or at the beginning.

function getInnerHTML() {
    console.log(this.innerHTML)
    if (this.innerHTML === ".") {
        if (answer_button.innerHTML.includes(".")) {
            console.log("Already added .")
        } else {
            answer_button.innerHTML = answer_button.innerHTML + this.innerHTML
        }
    }
    if (operatorsList.includes(this.innerHTML)) {
        console.log("Not working yet")
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

