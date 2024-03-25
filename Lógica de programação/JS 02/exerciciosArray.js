// let arr = [1, '2', 13, false, null, [], , 7, 14]
// let arr = [1, 13,  7, 14]
let arr = ['Joao', 'Maria', 'Daniel', 'Beatriz', 'Lucas']
let aux

// DADO UM ARRAY DE NOMES, MOSTRE OS NOMES DE TRAS PARA FRENTE
/*for ( let i = arr.length -1 ; i >= 0 ; i--){
    console.log(arr[i])
}

// INDIQUE COM UM BOOLEAN SE EXISTE ALGUM VALOR NULL, UNDEFINED OU NaN
/*for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "boolean" || typeof arr[i] == null || typeof arr[i] == "undefined") {
        aux = true
    }else{
        aux = 'Nao tem nenhum NULL, UNDEFINED OU NaN'
    }
}
    console.log(aux)

// SOMA DOS NUMERO IMPARES DE UM ARRAY
/*
for (let i = 0; i < arr.length; i++) {
    if ( typeof arr[i] == "number" && arr[i] % 2 !== 0){
        aux = aux + arr[i]
    }
}
console.log(aux)
*/

// MOSTAR A POSIÇÂO DO MEIO DO ARRAY
/*
||
if (arr.length % 2 == 0){
    aux = (arr.length / 2)
    console.log(arr[aux - 1])
}else{
    aux = ((arr.length - 1) / 2)
    console.log(arr[aux])
}
*/

// MOSTRAR A SOMA DE TODOS OS NUMEROS DO ARRAY
/*
for (let i = 0; i < arr.length ; i++) {

    if (typeof arr[i] == "number")
    aux = aux + arr[i]
}

console.log(aux) */