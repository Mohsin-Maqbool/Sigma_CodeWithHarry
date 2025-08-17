/*
* JavaScript Lecture 15
* Simple Form Validation
*/
function validateForm(){
    var first_name, last_name, email, budget, find_us, gender;
    first_name = document.getElementById("firstName").value;
    last_name = document.getElementById("lastName").value;
    email = document.getElementById("userEmail").value;
    budget = document.getElementById("userBudget").value;
    find_us = document.getElementById("findUs").value;
    gender = document.getElementsByName("gender");


    if(first_name == "" || email == "" || budget == 0 || find_us == 0){
        alert("All required fields must filled");
        return false;
    }else{
        if(gender[0].checked == true || gender[1].checked == true){
            return true;
        } else{
            alert("You must select Your gender");
            return false;
        }
    }
}
