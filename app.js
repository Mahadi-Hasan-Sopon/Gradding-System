const result = document.getElementById("result");


let userInput = prompt("Please Enter Your Point");

if (userInput <= 100 && userInput > 80) {
    result.innerHTML = "A+"
} else if (userInput <= 80 && userInput > 70) {
    result.innerHTML = "A"
} else if (userInput <= 70 && userInput > 60) {
    result.innerHTML = "A-"
} else if (userInput <= 60 && userInput > 50) {
    result.innerHTML = "B"
} else if (userInput <= 50 && userInput > 40) {
    result.innerHTML = "C"
} else if (userInput <= 40 && userInput >= 33) {
    result.innerHTML = "D"
} else if (userInput < 33 && userInput !== "" && userInput !== null) {
    result.innerHTML = "Fail"
} else if(userInput === "" || userInput === null) {
    result.innerHTML = "Please enter your point";
} else {
    result.innerHTML = "Invalid Input"
}
