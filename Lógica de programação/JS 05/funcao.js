

let number = document.getElementById('number')
let output = document.getElementById('output')

let tabuadaHTML = ''
function mostrarTabuada(){
    const numberValue = parseFloat(number.value)
    for (let i = 1; i <= 10 ; i++) {
        tabuadaHTML += `${i} X ${numberValue} = ${i * numberValue} <br>`
    }
    output.innerHTML = tabuadaHTML
}

function limpar(){
    output.innerHTML = ''
    tabuadaHTML = ''
}