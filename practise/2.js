function calculateArithmetic() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    
    document.getElementById('arithmeticResult').innerHTML = "Sum: " + sum + "<br>"
        + "Difference: " + difference + "<br>"
        + "Product: " + product + "<br>"
        + "Quotient: " + quotient;
}