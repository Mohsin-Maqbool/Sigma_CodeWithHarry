console.log("Mohsin")

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e =>{
   e.style.backgroundColor = "green";
   e.style.color = "white";
})

e = document.getElementsByTagName("div")