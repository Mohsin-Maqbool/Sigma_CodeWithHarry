/*
* JavaScript Lecture 13
*/
function changeStyles() {
    var heading = document.getElementById("heading");
    var nav = document.getElementById("navigation");
    heading.style.color = "red";
    heading.style.fontSize = "34px";
    nav.style.backgroundColor = "green";
}
function changeContent(){
    var heading = document.getElementById("heading");
heading.innerHTML = "Mouseover Event Occured";
}
document.getElementById("btn").addEventListener("click", changeStyles);
document.getElementById("btn").addEventListener("mouseover", changeStyles);
