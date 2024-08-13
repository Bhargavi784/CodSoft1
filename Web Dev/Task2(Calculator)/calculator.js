function clearScreen() {
    document.getElementById('calculator-screen').value = '';
}

function appendNumber(number) {
    document.getElementById('calculator-screen').value += number;
}

function calculate() {
    try {
        document.getElementById('calculator-screen').value = eval(document.getElementById('calculator-screen').value);
    } catch (e) {
        document.getElementById('calculator-screen').value = 'Error';
    }
}
