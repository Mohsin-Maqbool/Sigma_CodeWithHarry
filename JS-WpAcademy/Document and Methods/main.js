/*
* JavaScript Lecture 12
*/

//01: Finding HTML elements by id
document.getElementById("demo");
// a.innerHTML = '<h1 class="red-heading">Hello World</h1>';


//02: Finding HTML elements by tag name
var x = document.getElementsByTagName("p");
// document.getElementById("demo2").innerHTML = x[0].innerHTML;


//03: Finding HTML elements by class name
var y = document.getElementsByClassName("p1");
// document.getElementById("demo3").innerHTML = y[1].innerHTML;

// Change HTML Content
function changeHTML(){
    document.getElementById("demo2").innerHTML ='<a href="a">This is link Generated Dynamically</a>';
}

// Change HTML Attribute
function changeLink(){
document.getElementById("eLink").href = "https://google.com";
document.getElementById("eLink").target = "_blank";
}

//Set Attribute
function setNewAttribute(){
    document.getElementById("p2").setAttribute("class", "red")
}

//Create New Element
function createNewButton(){
  var btn =   document.createElement("BUTTON");
  var btnTxt = document.createTextNode("CLICK ME");
  btn.appendChild(btnTxt);
  document.getElementById("p2").appendChild(btn);
}

//Remove HTML element
function removeListItem(){
    var list = document.getElementById("ul1");
    list.removeChild(list.childNodes[0]);
}