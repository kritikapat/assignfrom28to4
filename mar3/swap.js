//Assignment 2: -> You have 2 variable.
// Both of them are number. var a = 10; var b = 20;
// -> Your task is to swap these variable. 
//(Your logic here). YOU CANNOT USE ANY OTHER VARIABLE. --> a; 20 --> b; 10


var a = prompt("enter a value for a");
var b = prompt("Enter a value for  b ");

if (isNaN(a) || isNaN(b)) {
    alert(" enter valid number")
} else {
    a = parseInt(a);
    b = parseInt(b);
    a = a - b;
    b = a + b;
    a = -(a) + b;
    var answer = document.getElementById("ans");
    answer.innerText = (`Answer : The swapped value of a is ${a}  and b is ${b}.`);
}