function calculateDiagonal() {
            var side1 = parseInt(document.getElementById('side1').value);
            var side2 = parseInt(document.getElementById('side2').value);
            var diagonal = Math.sqrt(side1 * side1 + side2 * side2);
            document.getElementById('diagonalResult').innerHTML = "Length of the diagonal: " + diagonal;
        }