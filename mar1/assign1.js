//On your registration form. 
//You need to have password and confirm password. 
//When I click on the submit button, check if both of them are same or not. 
//If they same, show ok, otherwise show some error message.//


function passwd() {
    var password = document.getElementById("pass");
    var cp = document.getElementById("confirm");
    var output = document.getElementById("out");
    password = password.value;
    cp = cp.value;
    if (password == cp) {
        output.innerText = "match";

    }
    else {
        output.innerText = "not match";
    }

}