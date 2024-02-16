//JavaScript Code
function squareCalculator() {
    let height = document.getElementById('tbHeight').value;
    let width = document.getElementById('tbWidth').value;
    let squareOutput = height * width;
    let calcCalcSquare = document.getElementById('squareOutput');
    calcCalcSquare.textContent = squareOutput + ' is your total ';

}
