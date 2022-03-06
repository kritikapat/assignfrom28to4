//Have 2 number input fields and 1 button. 
//When I click on the button, show the sum of both the numbers.
//SHowing in the HTML only, NOT alert or console.//

function sum() {
    var num1 = document.getElementById("num");
    var num2 = document.getElementById("num2");
    var output = document.getElementById("out");
    num1 = num1.value;
    num2 = num2.value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var sum=num1+num2
   
        output.innerText = sum;
    }

