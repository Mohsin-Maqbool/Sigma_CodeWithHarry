/*
* JavaScript Operators 
*/

var a = 10, b = 20;
var addition, multiply, subtract, divide, modulus, increment, decrement, assignment;

addition = a + b;
multiply = (a * b) + 10;
subtract = b - a;
divide = b / a;
modulus = a % b;

//Increment / Decrement Example
/*a++;
a++;
b--;
b--;
increment = a;
decrement = b;*/

a += 10;
// a = a + 10;
b -= 5;
//b = b - a;
//*=
///=
//%=
assignment = a;
assignment2 = b;

document.getElementById("addition").innerHTML = addition;
document.getElementById("multiply").innerHTML = multiply;
document.getElementById("subtract").innerHTML = subtract;
document.getElementById("divide").innerHTML = divide;
document.getElementById("modulus").innerHTML = modulus;
document.getElementById("increment").innerHTML = increment;
document.getElementById("decrement").innerHTML = decrement;
document.getElementById("assignment").innerHTML = assignment;
document.getElementById("assignment2").innerHTML = assignment2;