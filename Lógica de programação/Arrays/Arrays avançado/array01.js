// EVERY(), SOME(), FOREACH(), FILTER() E MAP()

const _arr = [1, 22, 'ola', 4, true];
// EVERY E SOME RETORNAM VALORES BOOLEANOS
// EVERY RETORNA TRUE SE A FUNÇAÕ DE CALLBACK EXECUTADA EM CADA ELEMENTO DO ARRAY RETORNAR TRUE
// SOME RETORNA TRUE SE PELO MENOS UM RETORNO DA FUNCAO DE CALLBACK RETORNAR TRUE
let soNumeros = arr.every(function (el) {
    return typeof  el === 'number'
})
// FILTER RETORNA UM NOVO ARRAY COM OS VALORES FILTRADOS
const arr1 = arr.filter(function (el, i, _arr) {
    return typeof el === 'number'
})

arr.forEach(function (el, i, _arr){
    console.log(i, ' : ', el)
})
//  MAP TRANSFORMA OS ELEMENTOS DE UM ARRAY COM BASE NO RETORNO DE UM CALLBACK
arr.map(function (el, i , _arr) {
    return el * el
})
console.log(soNumeros)
console.log(arr1)