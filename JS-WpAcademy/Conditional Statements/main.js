
var x = 12;

// The If Statement
if (x == 10) {
    document.getElementById("ifCondition").innerHTML = "The Value of X is greater than 10";
}

// IF/Else Statement
if (x > 10) {
    document.getElementById("ifElseCondition").innerHTML = "The Value of X is greater than 10";
} else {
    document.getElementById("ifElseCondition").innerHTML = "The Value of X is less than 10";

}

// Else/IF Statement
function checkValue() {
    var y = document.getElementById("userInput").value;

    if (y == 10) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 10";
    } else if (y == 12) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 12";
    } else if (y == 14) {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X is equal to 14";
    } else {
        document.getElementById("elseIfCondition").innerHTML = "The Value of X cannot be determined";
    }
}

// Switch Statement
function checkColor() {
    var color = document.getElementById("userInput2").value;
    switch (color) {
        case "red":
            document.getElementById("switchStatement").innerHTML = "The Color is Red";
            break;
        case "blue":
            document.getElementById("switchStatement").innerHTML = "The Color is Blue";
            break;
        default:
            document.getElementById("switchStatement").innerHTML = "The Color is " + color;
    }
}
