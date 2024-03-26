// CALCULAR AREA DE UM CIRCULO

let raio = document.getElementById('raio')
let output = document.getElementById('output')
let output2 = document.getElementById('output2')
// let area
// let area2
function mostrarAreaDoImputNoOutput() {
    const raioValue = raio.value
    let area = calcularArea(raioValue)
    output.innerHTML = ('A area digitada foi: ' + area)
}
function mostrarAreaDoPromptNoOutput(){
    let raio = parseFloat(prompt('Digite o raio do circulo'))
    let area = calcularArea(raio)
    output.innerHTML = ('A area digitada foi: ' + area)
}
function mostrarAreaDoImputNoAlert() {
    const raioValue = raio.value
    let area = calcularArea(raioValue)
    alert(`A area do circulo digitado é : ${area}`)
}

function mostrarAreaDoPromptNoAlert(){
    let raio = parseFloat(prompt('Digite o raio do circulo'))
    let area = calcularArea(raio)
    alert(`A area do circulo digitado é : ${area}`)
}
function calcularArea(raio){
    let area = (raio * Math.PI) * 2
    return area
}


// CALCULAR AREA DE UM TRIANGULO
/*
let base = document.getElementById('base')
let altura = document.getElementById('altura')
let output = document.getElementById('output')

let areaHTML 

function mostrarArea(){
    const baseValue = base.value
    const alturaValue = altura.value

    areaHTML = (baseValue * alturaValue) / 2

    output.innerHTML = areaHTML
}*/

/*
teste('Minha string') // ARGUMENTO
function teste(str) { // PARÂMETRO
    alert('funcao teste: ' + str)]
}*/
