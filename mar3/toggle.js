//Create a page, have a toggle button. 
//On this button, if I click once, show the popup, inside the popup have the close button. 
//-> I should be able to do it again and again without refresh.






function popupshow() {
    var subs = document.getElementById("subscribe");
    var showbtn = document.getElementById("showpopupbutton");
    showbtn.classList.add("none");
    subs.classList.add("initial");
}
function popupclose() {
    var subs = document.getElementById("subscribe");
    var showbtn = document.getElementById("showpopupbutton");
    showbtn.classList.remove("none");
    subs.classList.remove("initial");
}