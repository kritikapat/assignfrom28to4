function fizz() {
    var n = prompt("enter any number");
    n = parseInt(n);
    if (isNaN(n)) {
        alert("enter number");
    }
   
    for (i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 !== 0) {
            document.write (" fizz" +" </br>");
        }

        else if (i % 5 == 0 && i % 3 != 0) {
            document.write("buzz" + "</br>");
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            document.write("fizzbuzz" +" </br>");

        }
        else {
            document.write(i);
            document.write("</br>");

        }
    }

}
