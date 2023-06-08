const dial_pad = document.getElementById('dial_pad');
const operations = document.getElementById('operations_pad');
const outputDisplay = document.getElementById('output_frame');
const resetButton = document.getElementById('reset')
const equals = document.getElementById('=')
let symbolActive = false;
let arithmeticSymbol;
let firstNumber;
let secondNumber = [];
const operation_symbols = ['+','-','*','/','='];

//reset the output
resetButton.addEventListener('click', () =>{
    location.reload();
});

//i am displaying the numbers & symbols clicked
function displayNumbers() {
    const number = this.textContent;
    outputDisplay.textContent += number;
    if (Boolean(symbolActive)){
        secondNumber.push(number)
    }
}
function addSymbols() {
    firstNumber = outputDisplay.textContent;
    symbolActive = true;
    const symbol = this.textContent;
    outputDisplay.textContent += symbol;
    if(symbol === '='){
        performArithmetics()
    }else {
        arithmeticSymbol = symbol;
    }
}

//perform arithmetics
function performArithmetics() {
    switch (arithmeticSymbol) {
        case '+':
            const output = (parseInt(firstNumber) + parseInt (secondNumber.join('')));
            outputDisplay.textContent += output;
            break;
        case '-':
            outputDisplay.textContent += (parseInt(firstNumber) - parseInt (secondNumber.join('')));
            break;
        case '*':
            outputDisplay.textContent += (parseInt(firstNumber) * parseInt (secondNumber.join('')));
            break;
        case '/':
            outputDisplay.textContent += (parseInt(firstNumber) / parseInt (secondNumber.join('')));
            break;
        default:
            break;
    }
}
//this is creating the number containers on fly
for (let i = 9; i >= 0; i--) {
    const circluar_cont = document.createElement('div');
    circluar_cont.id = i.toString();
    circluar_cont.className = "circluar_container";
    circluar_cont.innerText = i.toString();
    dial_pad.appendChild(circluar_cont);
    circluar_cont.addEventListener('click', displayNumbers);
}
//this is creating the symbols containers on the fly
for (let i = 0; i < operation_symbols.length; i++) {
    const operator = document.createElement('div');
    operator.id = operation_symbols[i];
    operator.className = "circluar_container ops_cont";
    operator.innerText = operation_symbols[i];
    operations.appendChild(operator);
    operator.addEventListener('click', addSymbols);
}
