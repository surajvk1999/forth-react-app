function calculateCube() {
   var number = parseInt(document.getElementById('number').value);
    var cube = number * number * number;
    document.getElementById('cubeResult').innerHTML = "Cube of " + number + " is " + cube;
}

