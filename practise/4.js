function checkEvenOdd() {
    var numberCheck = parseInt(document.getElementById('numberCheck').value);
    if (numberCheck % 2 === 0) {
        document.getElementById('evenOddResult').innerHTML = numberCheck + " is even.";
    } else {
        document.getElementById('evenOddResult').innerHTML = numberCheck + " is odd.";
    }}