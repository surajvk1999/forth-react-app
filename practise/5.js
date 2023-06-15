function calculateSum() {
    var numbers = document.getElementById('numbers').value;
    var numberArray = numbers.split(",");
    var sum = 0;
    
    for (var i = 0; i < numberArray.length; i++) {
        sum += parseInt(numberArray[i]);
    }
    
    document.getElementById('sumResult').innerHTML = "Sum of the numbers: " + sum;
}