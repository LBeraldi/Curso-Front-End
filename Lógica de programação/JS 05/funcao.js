

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

//  --------------------------------------------------------

// FUNCTION DECLARATIONS
function ola1(nome) {
    console.log('Olá de function delcaration' + nome)
}
ola1('Lucas')

// FUNCTION EXPRESSIONS
const ola2 = function () {
    console.log('Olá de function expressions' + nome)
}
ola1('Pedro')

const arr = [ola1, ola2, function () { console.log('Funcao anonima dendro do array')}]
ola1('Lucas')

// ARROW FUNCTION


