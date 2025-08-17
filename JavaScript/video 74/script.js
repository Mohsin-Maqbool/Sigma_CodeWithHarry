let button = document.getElementById("btn")



// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    // alert("I was Clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy You were Clicked </b> Enjoy your clicked!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right Click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode);
})
