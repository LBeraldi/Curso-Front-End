// FUNÇÕES AUTO-INVOCAVEIS / IIFE ----------------------
(function (){
    let isValid = false
    consle.log('menu', isValid)
    function init(){
        console.log('init')
    }
    init()
})

// HOISTING ----------------------
const teste = function teste() {
    console.log('teste')
}
teste()

console.log(minhaVar)
var minhaVar = 'Minha var'
/*
function somar() {
    console.log(arguments)
    let total = 0
    for (let i = 0; i <arguments.length ; i++) {
        total += arguments[i]
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5))
console.log(somar(1, 2, 3, 4, 5, 12, 14, 50))*/
