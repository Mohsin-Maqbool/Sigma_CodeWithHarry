// function clickFunction(){
//     alert("Clicked");
// }

function clickFunction(){
    document.getElementById('clickEvent').innerHTML = "Button is Clicked";
}

function showCurrentChoice(){
    var choice = document.getElementById('selectBox').value;
    document.getElementById('showCurrentChoice').innerHTML = choice;
}

function mouseOverEvent(){
    document.getElementById('mouseEvent').style.backgroundColor = "black";
}

function mouseOutEvent(){
    document.getElementById('mouseEvent').style.backgroundColor = "darkorange";
}

function showTypedValue(){
    var text = document.getElementById('inputField').value;
    document.getElementById('textInput').innerHTML = text;
}