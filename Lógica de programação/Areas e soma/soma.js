let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let output = document.getElementById('output')
function somar() {
    const number1Value = number1.value
    const number2Value = number2.value
    
    let soma = number2Value + number1Value
    
    output.innerHTML = soma
}