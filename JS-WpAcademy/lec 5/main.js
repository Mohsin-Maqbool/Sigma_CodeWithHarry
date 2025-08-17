




//objects
var user = {
    firstName: "Shahzad",
    lastName: "raza",
    email: "someobe@example.com",
    fullName: function () {
        return this.firstName + " " + user.lastName;
    }
};

// var fname = user.firstName + " " + user.lastName;

var fullname = user.fullName();


//Arrays

var colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange"
];

var newcolors = ["pink", "black", "white"];
var newUsers = [12, 13, 15];

// colors[2] = 2;
// colors[2] = "Purple";
// colors[3] = newcolors;
// var showColor = colors[1];
// var showNewColors = colors[3];
// var showInteger = colors[2];


var mergeArrays = colors.concat(newcolors, newUsers);

document.getElementById("object").innerHTML = fullname;
document.getElementById("array").innerHTML = mergeArrays;