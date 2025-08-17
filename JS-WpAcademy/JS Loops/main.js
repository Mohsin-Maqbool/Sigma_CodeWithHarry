//  loops
var cars = ["honda", "toyota", "audi", "suzuki", "BMW", "Civic"];
var names = "";
var length = cars.length;

var user = {userID:"20", userName:"Mohsin", userEmail:"mohsin@gmail.com"};
var userData = "";
var x;

// for loop
for (i = 0; i < length; i++) {
    names += "<li>"+cars[i]+"</li>"
   document.getElementById("carNames").innerHTML = names;
    
}

// For/In Loop
for (x in user) {
userData += user[x]+"</br>";
document.getElementById("userData").innerHTML = userData;

}

// while loop
var numberTxt = "";
var n = 0;
while (n < 10) {
    numberTxt += "This number is " + n + "<br>";
    n++;
}
document.getElementById("while").innerHTML = numberTxt;

// Do/While loop
do {
    numberTxt += "This number is " + n + "<br>";
    n++;
} while (n < 10);
document.getElementById("dowhile").innerHTML = numberTxt;

